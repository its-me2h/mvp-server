import { mapSchema, getDirective, MapperKind } from '@graphql-tools/utils';
import { GraphQLSchema, GraphQLError, defaultFieldResolver } from 'graphql';

export default function authDirective(schema: GraphQLSchema, directiveName: string) {
    return mapSchema(schema, {
        [MapperKind.OBJECT_FIELD]: (fieldConfig) => {
            // Get the auth directive for the field
            const auth = getDirective(schema, fieldConfig, directiveName)?.[0];
            if (auth) {
                // If the field has an auth directive, modify its resolve function
                const { resolve = defaultFieldResolver } = fieldConfig;
                fieldConfig.resolve = async function (source, args, context, info) {
                    // Throw an error if the user is not authenticated
                    if (!context.user) {
                        throw new GraphQLError('Unauthorized, You must be authenticated for this action.', {
                            extensions: {
                                code: 'AUTH_REQUIRED',
                                httpStatusCode: 401
                            },
                        });
                    }
                    // Get the role requirements from the auth directive
                    const requires = auth['requires'];
                    if (requires) {
                        const contextRole = context.user.role;
                        const matchedRole = requires.find((requirement: any) => requirement.role === contextRole);
                        // Throw an error if the user's role does not match the required roles
                        if (!matchedRole) {
                            throw new GraphQLError(`Forbidden, Access to the ${info.fieldName || info.parentType} is denied for ${contextRole} role.`, {
                                extensions: {
                                    code: 'FORBIDDEN_ROLE',
                                    httpStatusCode: 403
                                }
                            });
                        }
                        // Throw an error if the user's role does not have access to the source's role
                        if (matchedRole.access && !matchedRole.access.includes(source.role)) {
                            throw new GraphQLError(`Forbidden, Access to the ${info.fieldName || info.parentType} of ${source.role} is denied for ${contextRole} role.`, {
                                extensions: {
                                    code: 'FORBIDDEN_ACCESS',
                                    httpStatusCode: 403
                                }
                            });
                        }
                    }
                    // If authentication and authorization pass, call the original resolve function
                    return await resolve(source, args, context, info);
                };
            }
            return undefined;
        },
        [MapperKind.TYPE]: () => undefined,
    });
}

import { loadSchemaSync } from '@graphql-tools/load';
import { mergeTypeDefs, mergeResolvers } from '@graphql-tools/merge';
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';
import { loadFilesSync } from '@graphql-tools/load-files';

// Load all GraphQL schema files
const typeDefsArray = loadSchemaSync('./src/graphql/**/*.graphql', { loaders: [new GraphQLFileLoader()] });
// Load all resolver files
const resolversArray = loadFilesSync(`./src/graphql/resolvers/**/*.resolvers.ts`);

// Merge the loaded type definitions into a single schema
export const typeDefs = mergeTypeDefs(typeDefsArray);
// Merge the loaded resolvers into a single resolver object
export const resolvers: any = mergeResolvers(resolversArray);

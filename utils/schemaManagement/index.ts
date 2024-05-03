import { makeExecutableSchema } from '@graphql-tools/schema';
import { typeDefs } from './buildSchema';
import { resolvers } from './buildResolvers';
import { directiveTransformers } from './buildDirectives';

// Create an executable GraphQL schema
let schema = makeExecutableSchema({ typeDefs, resolvers });

// Apply directive transformers to the schema
directiveTransformers.forEach(({ transformer, name }) => {
    schema = transformer(schema, name);
});

export { schema };

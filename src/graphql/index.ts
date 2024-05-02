import { makeExecutableSchema } from '@graphql-tools/schema';
import { typeDefs } from './schema';
import { resolvers } from './resolvers';
import { directiveTransformers } from './directives';

// Create an executable GraphQL schema
let schema = makeExecutableSchema({ typeDefs, resolvers });

// Apply directive transformers to the schema
directiveTransformers.forEach(({ transformer, name }) => {
    schema = transformer(schema, name);
});

export { schema };

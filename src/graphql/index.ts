import { makeExecutableSchema } from '@graphql-tools/schema';
import { typeDefs } from './schema';
import { resolvers } from './resolvers';

// Create a executable GraphQL schema
export const schema = makeExecutableSchema({ typeDefs, resolvers });

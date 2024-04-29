import { loadSchemaSync } from '@graphql-tools/load';
import { mergeTypeDefs } from '@graphql-tools/merge';
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';

// Load and merge all type definitions into a single schema
export const typeDefs = mergeTypeDefs(
    loadSchemaSync('./src/graphql/**/*.graphql', { loaders: [new GraphQLFileLoader()] })
);

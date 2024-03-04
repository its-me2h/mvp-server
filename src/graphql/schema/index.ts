import { loadSchemaSync } from '@graphql-tools/load';
import { mergeTypeDefs } from '@graphql-tools/merge';
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';

const typeDefs = loadSchemaSync('./src/graphql/**/*.graphql', {
    loaders: [new GraphQLFileLoader()]
});

export default mergeTypeDefs(typeDefs);
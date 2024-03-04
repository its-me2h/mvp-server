import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { buildSubgraphSchema } from '@apollo/subgraph';
import apolloConfig from './src/configs/apollo';
import gql from 'graphql-tag';

const app = express();
app.use(express.json());

const apollo = new ApolloServer({
    ...apolloConfig,
    // schema: buildSubgraphSchema([{ typeDefs, resolvers }])
});

apollo.start()
    .then(() => {
        apollo.applyMiddleware({ app, path: '/graphql' });
        app.listen({ port: 9009 }, () => console.log(`Listening on port ${9009}...`));
    }).catch((error) => {
        console.log('A failure occurred while starting the service.', error);
    });

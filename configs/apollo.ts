import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';

export default {
    plugins: [ApolloServerPluginLandingPageLocalDefault({ embed: true })],
};
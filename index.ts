import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import apolloConfig from './configs/apollo';
import { schema } from './utils/schemaManagement';
import { verifyAccessToken } from './src/user-service/utils/jwt/verifyTokens'

const app: any = express();
app.use(express.json());

// Create an ApolloServer instance
const apollo = new ApolloServer({
    ...apolloConfig,
    schema,
    context: ({ req }) => {
        // Get the user token from the headers.
        const token = req.headers.Authorization as string || req.headers.authorization || '';
        const user = verifyAccessToken(token);
        return { user };
    },
});

apollo.start().then(() => {
    // Apply Apollo middleware to the Express app
    apollo.applyMiddleware({ app, path: '/graphql' });
    // Start the Express app listening on port 9009
    app.listen(9009, () => {
        console.log('Server listening on port 9009...');
    });
}).catch(error => {
    console.error('Failed to start the server:', error);
});

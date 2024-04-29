import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import apolloConfig from './src/configs/apollo';
import { schema } from './src/graphql';

const app: any = express();
app.use(express.json());

// Create an ApolloServer instance
const apollo = new ApolloServer({
    ...apolloConfig,
    schema,
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

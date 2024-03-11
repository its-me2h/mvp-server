import { v4 as uuid } from 'uuid';
import { Client } from '../../../../models/user-service';

export const Query = {
    // Resolver function to get Client by ID
    client: async (_: any, { id }: { id: string }) => {
        return await Client.findByPk(id);
    },
};

export const Mutation = {
    // Resolver function to create a new Client
    createClient: async (_: any, { object }: { object: any }) => {
        return await Client.create({ id: uuid(), ...object });
    },
    // Resolver function to update the Client by ID
    updateClient: async (_: any, { id, object }: { id: string, object: any }) => {
        const client = await Client.findByPk(id);
        // If client is not found, throw an error
        if (!client) {
            throw new Error('Client not found');
        }
        // Update the client with the provided object
        await client.update(object);
        return client;
    },
};

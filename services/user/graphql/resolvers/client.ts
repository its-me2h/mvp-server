import { Client } from '../../models';

export const Mutation = {
    // Resolver function to create an account
    createClient: async (_: any, { object }: { object: any }) => {
        return await Client.create({
            ...object
        });
    },
    // Resolver function to update the Client by ID
    updateClient: async (_: any, { accountID, object }: { accountID: string, object: any }) => {
        const client = await Client.findByPk(accountID);
        if (!client) throw new Error('Client not found');
        return client.update(object);
    },
};

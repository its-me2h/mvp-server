import { Client } from '../../../../models/user-service';

export const Query = {
    // Resolver function to get a client by accountID
    getClientByAccountID: async (_: any, { accountID }: { accountID: string }) => {
        return await Client.findByPk(accountID);
    },
};

export const Mutation = {
    // Resolver function to update the Client by ID
    updateClient: async (_: any, { accountID, object }: { accountID: string, object: any }) => {
        const client = await Client.findByPk(accountID);
        if (!client) throw new Error('Client not found');
        return client.update(object);
    },
};

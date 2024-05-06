import { Client } from '../../models';

export const Mutation = {
    // Resolver function to create an account
    createClient: async (_: any, { input }: { input: any }) => {
        return await Client.create(input);
    },
};

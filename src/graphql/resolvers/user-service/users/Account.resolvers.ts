import { v4 as uuid } from 'uuid';
import { Account } from '../../../../models/user-service';

export const Query = {
    // Resolver function to get an Account by ID
    account: async (_: any, { id }: { id: string }) => {
        return await Account.findByPk(id);
    },
};

export const Mutation = {
    // Resolver function to update an Account by ID
    updateAccount: async (_: any, { id, object }: { id: string, object: any }) => {
        const account = await Account.findByPk(id);
        // If Account is not found, throw an error
        if (!account) {
            throw new Error('account not found');
        }
        // Update the Account with the provided object
        await account.update(object);
        return account;
    },
};

// Define a common resolver function for the account field
const getAccount = async (profile: any) => {
    return await Account.findOne({ where: { id: profile.id } });
}
export const SuperAdmin = {
    account: getAccount,
}
export const Admin = {
    account: getAccount,
}
export const Manager = {
    account: getAccount,
}
export const Client = {
    account: getAccount,
}

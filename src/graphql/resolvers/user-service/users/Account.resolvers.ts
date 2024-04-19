import { v4 as uuid } from 'uuid';
import { Account, Client } from '../../../../models/user-service';

export const Query = {
    // Resolver function to get an Account by ID
    getAccountByID: async (_: any, { id }: { id: string }) => {
        return await Account.findByPk(id);
    },
};

export const Mutation = {
    // Resolver function to create an account
    createAccount: async (_: any, { object }: { object: any }) => {
        return await Account.create({
            id: uuid(),
            ...object
        });
    },
    // Resolver function to update an Account by ID
    updateAccount: async (_: any, { id, object }: { id: string, object: any }) => {
        const account = await Account.findByPk(id);
        if (!account) throw new Error('account not found');
        return await account.update(object);
    },
};

export const User = {
    accounts: async (user: any) => {
        return await Account.findAll({ where: { userId: user.id } });
    },
}

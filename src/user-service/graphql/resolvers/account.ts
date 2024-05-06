import { GraphQLError } from 'graphql';
import { Account } from '../../models';

export const Mutation = {
    // Resolver function to create an account
    createAccount: async (_: any, { input }: { input: any }) => {
        return await Account.create({
            ...input
        });
    },
    // Resolver function to update an Account by ID
    updateAccount: async (_: any, { id, input }: { id: string, input: any }) => {
        const account = await Account.findByPk(id);
        if (!account) {
            throw new GraphQLError('Account not found, Please verify your details and try again.', {
                extensions: {
                    code: 'ACCOUNT_NOT_FOUND',
                    httpStatusCode: 404
                }
            });
        }
        return await account.update(input);
    },
};

export const User = {
    accounts: async (user: any) => {
        return await Account.findAll({ where: { id: user.id } });
    },
}

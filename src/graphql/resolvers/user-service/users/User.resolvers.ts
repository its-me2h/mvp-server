import { v4 as uuid } from 'uuid';
import { User, Admin, Manager, Client, SuperAdmin, Account } from '../../../../models/user-service';

export const Query = {
    // Resolver function to get an user by ID
    user: async (_: any, { id }: { id: string }) => {
        return await User.findByPk(id);
    },
};

export const Mutation = {
    // Resolver function to create a new user
    createUser: async (_: any, { object }: { object: any }) => {
        // Map the user's role to the corresponding model
        const roleMap: { [key: string]: any } = {
            superAdmin: SuperAdmin,
            admin: Admin,
            manager: Manager,
            client: Client
        };
        const role = roleMap[object.role];
        // Create a new user with a unique ID
        const user: any = await User.create({
            id: uuid(),
            ...object
        });
        // Create a new account with a unique ID
        const account: any = await Account.create({
            id: uuid(),
            creatorID: 'con-text-ID',
            status: 'active'
        });
        // Create a new role instance with a unique ID same as account ID
        await role.create({
            id: account.id,
            userID: user.id,
        });
        // Return the created user
        return user;
    },
    // Resolver function to update an user by ID
    updateUser: async (_: any, { id, object }: { id: string, object: any }) => {
        const user = await User.findByPk(id);
        // If user is not found, throw an error
        if (!user) {
            throw new Error('user not found');
        }
        // Update the user with the provided object
        await user.update(object);
        return user;
    },
};

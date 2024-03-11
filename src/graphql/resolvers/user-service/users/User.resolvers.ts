import { v4 as uuid } from 'uuid';
import { User, Admin, Manager, Client } from '../../../../models/user-service';

export const Query = {
    // Resolver function to get an user by ID
    user: async (_: any, { id }: { id: string }) => {
        return await User.findByPk(id);
    },
};

export const Mutation = {
    // Resolver function to create a new user
    createUser: async (_: any, { object }: { object: any }) => {
        // Create a new user with a unique ID
        const user: any = await User.create({ id: uuid(), ...object });
        // Map the user's role to the corresponding model
        const roleMap: { [key: string]: any } = {
            admin: Admin,
            manager: Manager,
            client: Client
        };
        const RoleModel = roleMap[object.role];
        // If a RoleModel exists for the user's role, create a new role instance
        if (RoleModel) {
            await RoleModel.create({
                id: uuid(),
                userID: user.id,
                status: user.status
            });
        }
        // Return the created user
        return user;
    },
    // Resolver function to update an user by ID
    updateUser: async (_: any, { id, object }: { id: string, object: any }) => {
        const user = await User.findByPk(id);
        // If user is not found, throw an error
        if (!user) {
            throw new Error('User not found');
        }
        // Update the user with the provided object
        await user.update(object);
        return user;
    },
};

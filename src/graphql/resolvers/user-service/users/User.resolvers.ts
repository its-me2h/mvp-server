import { v4 as uuid } from 'uuid';
import { User } from '../../../../models/user-service';

export const Query = {
    // Resolver function to get an user by ID
    getUserByID: async (_: any, { id }: { id: string }) => {
        return await User.findByPk(id);
    },
};

export const Mutation = {
    // Resolver function to create a user
    createUser: async (_: any, { object }: { object: any }) => {
        return await User.create({
            id: uuid(),
            ...object
        });
    },
    // Resolver function to update an user by ID
    updateUser: async (_: any, { id, object }: { id: string, object: any }) => {
        const user = await User.findByPk(id);
        if (!user) throw new Error('user not found');
        return await user.update(object);
    },
};

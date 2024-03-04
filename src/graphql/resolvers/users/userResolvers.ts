import { User } from '../../../models/users/User';

export const userResolvers = {
    Query: {
        user: async (_: any, { id }: { id: string }) => {
            return await User.findByPk(id);
        },
    },
    Mutation: {
        createUser: async (_: any, { object }: { object: any }) => {
            return await User.create(object);
        },
        updateUser: async (_: any, { id, object }: { id: string, object: any }) => {
            const user = await User.findByPk(id);
            if (!user) {
                throw new Error('User not found');
            }
            await user.update(object);
            return user;
        },
    },
};

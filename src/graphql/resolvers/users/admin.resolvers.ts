import { Admin } from '../../../models';

export const Query = {
    // Resolver function to get an admin by ID
    admin: async (_: any, { id }: { id: string }) => {
        return await Admin.findByPk(id);
    },
};

export const Mutation = {
    // Resolver function to update an admin by ID
    updateAdmin: async (_: any, { id, object }: { id: string, object: any }) => {
        const admin = await Admin.findByPk(id);
        // If admin is not found, throw an error
        if (!admin) {
            throw new Error('Admin not found');
        }
        // Update the admin with the provided object
        await admin.update(object);
        return admin;
    },
};

export const User = {
    // Nested query for retrieving Admin information from User
    admin: async (user: any) => {
        return await Admin.findAll({ where: { userId: user.id } });
    },
}

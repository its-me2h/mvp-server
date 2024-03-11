import { v4 as uuid } from 'uuid';
import { SuperAdmin } from '../../../../models/user-service';

export const Query = {
    // Resolver function to get an Superadmin by ID
    superadmin: async (_: any, { id }: { id: string }) => {
        return await SuperAdmin.findByPk(id);
    },
};

export const Mutation = {
    // Resolver function to create a new SuperAdmin
    createSuperAdmin: async (_: any, { object }: { object: any }) => {
        return await SuperAdmin.create({ id: uuid(), ...object });
    },
    // Resolver function to update an Superadmin by ID
    updateSuperAdmin: async (_: any, { id, object }: { id: string, object: any }) => {
        const superadmin = await SuperAdmin.findByPk(id);
        // If Superadmin is not found, throw an error
        if (!superadmin) {
            throw new Error('SuperAdmin not found');
        }
        // Update the Superadmin with the provided object
        await superadmin.update(object);
        return superadmin;
    },
};

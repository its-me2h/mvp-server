import { v4 as uuid } from 'uuid';
import { Manager } from '../../../../models/user-service';

export const Query = {
    // Resolver function to get Manager by ID
    manager: async (_: any, { id }: { id: string }) => {
        return await Manager.findByPk(id);
    },
};

export const Mutation = {
    // Resolver function to create a new Manager
    createManager: async (_: any, { object }: { object: any }) => {
        return await Manager.create({ id: uuid(), ...object });
    },
    // Resolver function to update the Manager by ID
    updateManager: async (_: any, { id, object }: { id: string, object: any }) => {
        const manager = await Manager.findByPk(id);
        // If Manager is not found, throw an error
        if (!manager) {
            throw new Error('manager not found');
        }
        // Update the Manager with the provided object
        await manager.update(object);
        return manager;
    },
};

import { v4 as uuid } from 'uuid';
import { Apartment } from '../../../../models/building-service';

export const Query = {
    // Resolver function to get Apartment by ID
    apartment: async (_: any, { id }: { id: string }) => {
        return await Apartment.findByPk(id);
    },
};

export const Mutation = {
    // Resolver function to create a new Apartment
    createApartment: async (_: any, { object }: { object: any }) => {
        return await Apartment.create({ id: uuid(), ...object });
    },
    // Resolver function to update the Apartment by ID
    updateApartment: async (_: any, { id, object }: { id: string, object: any }) => {
        const apartment = await Apartment.findByPk(id);
        // If Apartment is not found, throw an error
        if (!apartment) {
            throw new Error('Apartment not found');
        }
        // Update the Apartment with the provided object
        await apartment.update(object);
        return apartment;
    },
};

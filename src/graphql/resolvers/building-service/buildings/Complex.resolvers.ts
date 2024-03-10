import { v4 as uuid } from 'uuid';
import { Complex } from '../../../../models/building-service';

export const Query = {
    // Resolver function to get Complex by ID
    complex: async (_: any, { id }: { id: string }) => {
        return await Complex.findByPk(id);
    },
};

export const Mutation = {
    // Resolver function to create a new Complex
    createComplex: async (_: any, { object }: { object: any }) => {
        return await Complex.create({ id: uuid(), ...object });
    },
    // Resolver function to update the Complex by ID
    updateComplex: async (_: any, { id, object }: { id: string, object: any }) => {
        const complex = await Complex.findByPk(id);
        // If Complex is not found, throw an error
        if (!complex) {
            throw new Error('Complex not found');
        }
        // Update the Complex with the provided object
        await complex.update(object);
        return complex;
    },
};

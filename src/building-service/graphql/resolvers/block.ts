import { v4 as uuid } from 'uuid';
import { Block } from '../../models';

export const Query = {
    // Resolver function to get Block by ID
    block: async (_: any, { id }: { id: string }) => {
        return await Block.findByPk(id);
    },
};

export const Mutation = {
    // Resolver function to create a new Block
    createBlock: async (_: any, { object }: { object: any }) => {
        return await Block.create({ id: uuid(), ...object });
    },
    // Resolver function to update the Block by ID
    updateBlock: async (_: any, { id, object }: { id: string, object: any }) => {
        const block = await Block.findByPk(id);
        // If Block is not found, throw an error
        if (!block) {
            throw new Error('Block not found');
        }
        // Update the Block with the provided object
        await block.update(object);
        return block;
    },
};

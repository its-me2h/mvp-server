import { v4 as uuid } from 'uuid';
import bcrypt from 'bcrypt';
import generator from 'generate-password';
import { User } from '../../../../models/user-service';
import { sendAccountCredentialsEmail } from '../../../../utils/email-service/mailers';

export const Query = {
    // Resolver function to get an user by ID
    getUserByID: async (_: any, { id }: { id: string }) => {
        return await User.findByPk(id);
    },
};

export const Mutation = {
    // Resolver function to create a user
    createUser: async (_: any, { object }: { object: any }) => {
        const randomPassword = generator.generate({ length: 8, numbers: true });
        const hashedPassword = await bcrypt.hash(randomPassword, 10);
        const user: any = await User.create({
            id: uuid(),
            password: hashedPassword,
            ...object
        });
        sendAccountCredentialsEmail(user.email, randomPassword)  
        return user
    },
    // Resolver function to update an user by ID
    updateUser: async (_: any, { id, object }: { id: string, object: any }) => {
        const user = await User.findByPk(id);
        if (!user) throw new Error('user not found');
        return await user.update(object);
    },
};

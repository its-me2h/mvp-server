import { GraphQLError } from 'graphql';
import generator from 'generate-password';
import bcrypt from 'bcrypt';
import { User } from '../../models';
import { sendAccountCredentialsEmail } from '../../utils/email-service/mailers';

export const Query = {
    // Resolver function to get an user by ID
    getUserByID: async (_: any, { id }: { id: string }) => {
        return await User.findByPk(id);
    },
};

export const Mutation = {
    // Resolver function to create a user
    createUser: async (_: any, { input }: { input: any }) => {
        const randomPassword = generator.generate({ length: 8, numbers: true });
        const hashedPassword = await bcrypt.hash(randomPassword, 10);
        const user: any = await User.create({
            password: hashedPassword,
            ...input
        });
        sendAccountCredentialsEmail(user.email, randomPassword)  
        return user
    },
    // Resolver function to update an user by ID
    updateUser: async (_: any, { id, input }: { id: string, input: any }) => {
        const user = await User.findByPk(id);
        if (!user) {
            throw new GraphQLError('User not found, Please verify your details and try again.', {
                extensions: {
                    code: 'USER_NOT_FOUND',
                    httpStatusCode: 404
                }
            });
        };
        return await user.update(input);
    },
};

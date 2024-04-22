import bcrypt from 'bcrypt';
import { User } from '../../../../models/user-service';

export const Mutation = {
    // Resolver function to authenticate a user
    authenticateUser: async (_: any, { email, password }: { email: string, password: string }) => {
            // Find user by email in your database
            const user: any = await User.findOne({ where: { email } });
            if (!user) {
                throw new Error('Invalid Email');
            }

            // Check if the provided password matches the hashed password in the database
            const isPasswordValid = await bcrypt.compare(password, user.password);
            if (!isPasswordValid) {
                throw new Error('Invalid password');
            }

            // Authentication successful, you can return a token or user object here
            return user
    },
};

import bcrypt from 'bcrypt';
import { User } from '../../../../models/user-service';
import { generateTokens } from '../../../../utils/jwt/generateTokens';

export const Mutation = {
    // Resolver function to authenticate a user
    authentication: async (_: any, { email, password }: { email: string, password: string }) => {
            // Find user by email
            const user: any = await User.findOne({ where: { email } });
            if (!user) throw new Error('Invalid Email');

            // Check if the provided password matches the hashed password in the database
            const isPasswordValid = await bcrypt.compare(password, user.password);
            if (!isPasswordValid) throw new Error('Invalid password');

            // Generate JWT tokens
            const { accessToken, refreshToken } = generateTokens(user);

            // Return accessToken
            return { accessToken };
    },
};

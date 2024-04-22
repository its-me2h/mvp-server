import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { User } from '../../../../models/user-service';

export const Mutation = {
    // Resolver function to authenticate a user
    authenticateUser: async (_: any, { email, password }: { email: string, password: string }) => {
            // Find user by email
            const user: any = await User.findOne({ where: { email } });
            if (!user) throw new Error('Invalid Email');

            // Check if the provided password matches the hashed password in the database
            const isPasswordValid = await bcrypt.compare(password, user.password);
            if (!isPasswordValid) throw new Error('Invalid password');

            // Generate JWT tokens
            const accessToken = jwt.sign({id: user.id}, process.env.ACCESS_TOKEN_SECRET!, {expiresIn: '1h'});
            const refreshToken = jwt.sign({userId: user.id}, process.env.REFRESH_TOKEN_SECRET!, {expiresIn: '7d'});

            // Return user object along with tokens
            return { user, accessToken, refreshToken };
    },
};

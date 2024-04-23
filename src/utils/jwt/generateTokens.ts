import jwt from 'jsonwebtoken';

export const generateTokens = (user: any) => {
    const accessToken = jwt.sign(
        { id: user.id, role: user.role },
        process.env.ACCESS_TOKEN_SECRET!,
        { expiresIn: '10m' },
    );
    const refreshToken = jwt.sign(
        { id: user.id },
        process.env.REFRESH_TOKEN_SECRET!,
        { expiresIn: '7d' },
    );
    return { accessToken, refreshToken };
};
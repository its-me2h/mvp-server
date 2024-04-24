import jwt from 'jsonwebtoken';

export function generateAccessToken(user: any) {
    return jwt.sign(
        { id: user.id, role: user.role },
        process.env.ACCESS_TOKEN_SECRET!,
        { expiresIn: '10m' },
    );
}

export function generateRefreshToken(user: any) {
    return jwt.sign(
        { id: user.id },
        process.env.REFRESH_TOKEN_SECRET!,
        { expiresIn: '7d' },
    );
}

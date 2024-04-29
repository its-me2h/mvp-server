import jwt from 'jsonwebtoken';

export function verifyAccessToken(token: string) {
    try {
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET!);
        return decoded;
    } catch (err) {
        return null;
    }
}

export function verifyRefreshToken(token: any) {
    try {
        const decoded = jwt.verify(token, process.env.REFRESH_TOKEN_SECRET!);
        return decoded;
    } catch (err) {
        return null;
    }
}

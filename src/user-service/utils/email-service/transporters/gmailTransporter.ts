import nodemailer from 'nodemailer';

export function gmailTransporter(email: string, password: string) {
    return nodemailer.createTransport({
        service: "gmail",
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: email,
            pass: password,
        },
    });
};

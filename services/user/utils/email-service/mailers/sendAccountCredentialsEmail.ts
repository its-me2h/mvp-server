import path from 'path';
import { gmailTransporter } from '../transporters';
import fs from 'fs';

export function sendAccountCredentialsEmail(email: string, password: string) {

    // Read the template file
    const template = fs.readFileSync( path.join(__dirname, '../templates/accountCredentials.html'), 'utf8');
    const processedTemplate = template
        .replace('{{email}}', email)
        .replace('{{password}}', password);

    const mailOptions = {
        from: `Layan ${process.env.NODEMAILER_EMAIL}`,
        to: email,
        bcc: 'harmouchet@gmail.com',
        subject: 'This is subject',
        html: processedTemplate,
    };

    gmailTransporter(process.env.NODEMAILER_EMAIL!, process.env.NODEMAILER_PASSWORD!).sendMail(mailOptions, (error: any, info: any) => {
        if (error) {
            console.error('Error sending email:', error);
        } else {
            console.log('Email sent:', info.response);
        }
    });

};

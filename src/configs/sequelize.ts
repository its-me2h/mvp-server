import 'dotenv/config';
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(
    process.env.DB_NAME!,
    process.env.DB_USER!,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: 'mysql',
    }
);

sequelize
    .authenticate()
    .then(() => {
        console.log('Database connection has been successfully.');
    })
    .catch((error: any) => {
        console.error('Unable to connect to the database:', error);
    });

export default sequelize;
import { DataTypes } from 'sequelize';
import sequelize from '../../../configs/sequelize';

export const Register = sequelize.define('Register', {
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
    blockID: {
        type: DataTypes.STRING,
    },
    receipts: {
        type: DataTypes.FLOAT,
    },
    expenses: {
        type: DataTypes.FLOAT,
    },
    balance: {
        type: DataTypes.FLOAT,
    },
});

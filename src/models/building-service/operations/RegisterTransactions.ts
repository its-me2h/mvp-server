import { DataTypes } from 'sequelize';
import sequelize from '../../../configs/sequelize';

export const RegisterTransactions = sequelize.define('RegisterTransactions', {
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
    registerId: {
        type: DataTypes.STRING,
    },
    type: {
        type: DataTypes.STRING,
    },
    amount: {
        type: DataTypes.FLOAT,
    },
    name: {
        type: DataTypes.STRING,
    },
    description: {
        type: DataTypes.STRING,
    },
});

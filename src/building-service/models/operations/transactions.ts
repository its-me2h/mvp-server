import { DataTypes } from 'sequelize';
import sequelize from '../../../../configs/sequelize';

export const Transactions = sequelize.define('Transactions', {
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
    purpose: {
        type: DataTypes.STRING,
    },
    description: {
        type: DataTypes.STRING,
    },
    amount: {
        type: DataTypes.FLOAT,
    },
});

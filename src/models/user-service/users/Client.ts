import { DataTypes } from 'sequelize';
import sequelize from '../../../configs/sequelize';

export const Client = sequelize.define('Client', {
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
    userID: {
        type: DataTypes.STRING,
    },
    apartmentID: {
        type: DataTypes.STRING,
    },
    accountID: {
        type: DataTypes.STRING,
    },
});

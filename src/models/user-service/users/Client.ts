import { DataTypes } from 'sequelize';
import sequelize from '../../../configs/sequelize';

export const Client = sequelize.define('Client', {
    accountID: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
    apartmentID: {
        type: DataTypes.STRING,
    },
});

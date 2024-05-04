import { DataTypes } from 'sequelize';
import sequelize from '../../../configs/sequelize';

export const Client = sequelize.define('Client', {
    accountId: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
    apartmentId: {
        type: DataTypes.STRING,
    },
});

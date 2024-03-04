import { DataTypes } from 'sequelize';
import sequelize from '../../configs/sequelize';

export const Client = sequelize.define('Client', {
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
    userID: {
        type: DataTypes.STRING,
    },
    status: {
        type: DataTypes.STRING,
    },
});

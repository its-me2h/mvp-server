import { DataTypes } from 'sequelize';
import sequelize from '../../../configs/sequelize';

export const SuperAdmin = sequelize.define('SuperAdmin', {
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

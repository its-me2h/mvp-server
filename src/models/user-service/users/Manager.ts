import { DataTypes } from 'sequelize';
import sequelize from '../../../configs/sequelize';

export const Manager = sequelize.define('Manager', {
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
    userID: {
        type: DataTypes.STRING,
    },
});

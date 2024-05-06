import { DataTypes } from 'sequelize';
import sequelize from '../../../configs/sequelize';

export const User = sequelize.define('User', {
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
    role: {
        type: DataTypes.STRING,
    },
    status: {
        type: DataTypes.STRING,
    },
    phone: {
        type: DataTypes.STRING,
        unique: true,
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
    },
});

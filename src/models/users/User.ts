import { DataTypes } from 'sequelize';
import sequelize from '../../configs/sequelize';

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
    firstName: {
        type: DataTypes.STRING,
    },
    lastName: {
        type: DataTypes.STRING,
    },
    password: {
        type: DataTypes.STRING,
    },
    phone: {
        type: DataTypes.STRING,
        unique: true,
    },
    age: {
        type: DataTypes.INTEGER,
    },
    gender: {
        type: DataTypes.STRING,
    },
    avatarURI: {
        type: DataTypes.STRING,
    },
    lastLogin: {
        type: DataTypes.DATE,
    },
});

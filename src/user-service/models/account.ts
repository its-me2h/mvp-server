import { DataTypes } from 'sequelize';
import sequelize from '../../../configs/sequelize';

export const Account = sequelize.define('Account', {
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
    creatorId: {
        type: DataTypes.STRING,
    },
    firstName: {
        type: DataTypes.STRING,
    },
    lastName: {
        type: DataTypes.STRING,
    },
    birthDate: {
        type: DataTypes.DATE,
    },
    gender: {
        type: DataTypes.STRING,
    },
    avatarURI: {
        type: DataTypes.STRING,
    },
    lastLoginDate: {
        type: DataTypes.DATE,
    },
});

import { DataTypes } from 'sequelize';
import sequelize from '../../../configs/sequelize';

export const Account = sequelize.define('Account', {
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
    userId: {
        type: DataTypes.STRING,
    },
    creatorId: {
        type: DataTypes.STRING,
    },
    status: {
        type: DataTypes.STRING,
    },
    avatarURI: {
        type: DataTypes.STRING,
    },
    lastLoginDate: {
        type: DataTypes.DATE,
    },
});

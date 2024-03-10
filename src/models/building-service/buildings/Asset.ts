import { DataTypes } from 'sequelize';
import sequelize from '../../../configs/sequelize';

export const Asset = sequelize.define('Asset', {
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
    blockID: {
        type: DataTypes.STRING,
    },
    status: {
        type: DataTypes.STRING,
    },
    name: {
        type: DataTypes.STRING,
    },
    description: {
        type: DataTypes.STRING,
    },
});

import { DataTypes } from 'sequelize';
import sequelize from '../../../../configs/sequelize';

export const Complex = sequelize.define('Complex', {
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
    creatorID: {
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
    address: {
        type: DataTypes.STRING,
    },
    latitude: {
        type: DataTypes.FLOAT,
    },
    longitude: {
        type: DataTypes.FLOAT,
    },
    blocksCount: {
        type: DataTypes.INTEGER,
    },
});

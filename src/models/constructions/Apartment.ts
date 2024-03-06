import { DataTypes } from 'sequelize';
import sequelize from '../../configs/sequelize';

export const Apartment = sequelize.define('Apartment', {
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

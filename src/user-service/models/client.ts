import { DataTypes } from 'sequelize';
import sequelize from '../../../configs/sequelize';

export const Client = sequelize.define('Client', {
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
    userId: {
        type: DataTypes.STRING,
    },
    complexId: {
        type: DataTypes.STRING,
    },
    blockId: {
        type: DataTypes.STRING,
    },
    apartmentId: {
        type: DataTypes.STRING,
    },
});

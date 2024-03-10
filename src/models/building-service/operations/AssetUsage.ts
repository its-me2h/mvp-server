import { DataTypes } from 'sequelize';
import sequelize from '../../../configs/sequelize';

export const AssetUsage = sequelize.define('AssetUsage', {
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
    assetID: {
        type: DataTypes.STRING,
    },
    apartmentID: {
        type: DataTypes.STRING,
    },
    usageStart: {
        type: DataTypes.DATE,
    },
    usageEnd: {
        type: DataTypes.DATE,
    },
});

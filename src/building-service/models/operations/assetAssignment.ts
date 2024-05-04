import { DataTypes } from 'sequelize';
import sequelize from '../../../../configs/sequelize';

export const AssetAssignment = sequelize.define('AssetAssignment', {
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
    assetUsageID: {
        type: DataTypes.STRING,
    },
    name: {
        type: DataTypes.STRING,
    },
    description: {
        type: DataTypes.STRING,
    },
});


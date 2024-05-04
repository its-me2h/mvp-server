import { DataTypes } from 'sequelize';
import sequelize from '../../../../configs/sequelize';

export const AssetUsage = sequelize.define('AssetUsage', {
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
    clientID: {
        type: DataTypes.STRING,
    },
    assetID: {
        type: DataTypes.STRING,
    },
    subscriptionID: {
        type: DataTypes.STRING,
    },
});

import { DataTypes } from 'sequelize';
import sequelize from '../../../../configs/sequelize';

export const AssetType = sequelize.define('AssetType', {
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
    },
    description: {
        type: DataTypes.STRING,
    },
    avatarURI: {
        type: DataTypes.STRING,
    },
    count: {
        type: DataTypes.INTEGER,
    },
});

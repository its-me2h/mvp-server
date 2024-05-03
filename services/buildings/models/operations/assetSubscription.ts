import { DataTypes } from 'sequelize';
import sequelize from '../../../../configs/sequelize';

export const AssetSubscription = sequelize.define('AssetSubscription', {
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
    type: {
        type: DataTypes.STRING,
    },
    amount: {
        type: DataTypes.FLOAT,
    },
    startDate: {
        type: DataTypes.DATE,
    },
    endDate: {
        type: DataTypes.DATE,
    },
});


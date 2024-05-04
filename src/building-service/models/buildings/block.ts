import { DataTypes } from 'sequelize';
import sequelize from '../../../../configs/sequelize';

export const Block = sequelize.define('Block', {
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
    complexID: {
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

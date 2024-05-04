import { DataTypes } from 'sequelize';
import sequelize from '../../../../configs/sequelize';

export const Register = sequelize.define('Register', {
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
    blockID: {
        type: DataTypes.STRING,
    },
    balance: {
        type: DataTypes.FLOAT,
    },
});

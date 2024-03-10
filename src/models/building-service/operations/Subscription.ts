import { DataTypes } from 'sequelize';
import sequelize from '../../../configs/sequelize';

export const Subscription = sequelize.define('Subscription', {
    id: {
        type: DataTypes.STRING,
    },
    clientID: {
        type: DataTypes.STRING,
    },
    apartmentID: {
        type: DataTypes.STRING,
    },
    subscriptionStart: {
        type: DataTypes.DATE,
    },
    subscriptionEnd: {
        type: DataTypes.DATE,
    },
    amount: {
        type: DataTypes.FLOAT,
    },
});


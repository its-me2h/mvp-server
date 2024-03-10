import { DataTypes } from 'sequelize';
import sequelize from '../../../configs/sequelize';

export const ApartmentVisit = sequelize.define('ApartmentVisit', {
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
    clientID: {
        type: DataTypes.STRING,
    },
    apartmentID: {
        type: DataTypes.STRING,
    },
    clientNote: {
        type: DataTypes.STRING,
    },
    visitorName: {
        type: DataTypes.STRING,
    },
    visitStart: {
        type: DataTypes.DATE,
    },
    visitEnd: {
        type: DataTypes.DATE,
    },
});

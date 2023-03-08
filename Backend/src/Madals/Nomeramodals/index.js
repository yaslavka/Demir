const {DataTypes} = require("sequelize");
const sequelize = require("../../../db");
const {Hotel} = require("../OtelModals");

const Nomera =sequelize.define('nomera', {
    id: {type: DataTypes.BIGINT, primaryKey: true, autoIncrement: 11},
    nemenomer:{type: DataTypes.STRING, allowNull: false},
    imagenomer:{type: DataTypes.STRING, defaultValue: null},
    spalnyemesta:{type: DataTypes.STRING, allowNull: false},
    nomerinfo:{type: DataTypes.TEXT, defaultValue: null},
    komnat: {type: DataTypes.DECIMAL, defaultValue: 0},
    kvadratura:{type: DataTypes.DECIMAL, defaultValue: 0, allowNull: false},
    gosti:{type: DataTypes.DECIMAL, defaultValue: 0},
    tv:{type: DataTypes.BOOLEAN, defaultValue: false},
    zavtrak:{type: DataTypes.BOOLEAN, defaultValue: false},
    methodoplaty:{type: DataTypes.BOOLEAN, defaultValue: false},
    pansion:{type: DataTypes.BOOLEAN, defaultValue: false},
    price:{type: DataTypes.DECIMAL(61, 2), defaultValue: 0.00, allowNull: false},
    wifi:{type: DataTypes.BOOLEAN, defaultValue: false},
    activ:{type: DataTypes.BOOLEAN, defaultValue: false},
    bal:{type: DataTypes.DECIMAL(61, 1), defaultValue: 0.0, allowNull: false},
    balobslugi:{type: DataTypes.DECIMAL(61, 1), defaultValue: 0.0, allowNull: false},
    kachestvo:{type: DataTypes.DECIMAL(61, 1), defaultValue: 0.0, allowNull: false},
    pitanie:{type: DataTypes.DECIMAL(61, 1), defaultValue: 0.0, allowNull: false},
    chistota:{type: DataTypes.DECIMAL(61, 1), defaultValue: 0.0, allowNull: false},
    son:{type: DataTypes.DECIMAL(61, 1), defaultValue: 0.0, allowNull: false},
    hotelId:{type: DataTypes.BIGINT, defaultValue: null},
})
Hotel.hasMany(Nomera, {as:'nomera'})
Nomera.belongsTo(Hotel, {as: 'hotel'})

module.exports = {Nomera}
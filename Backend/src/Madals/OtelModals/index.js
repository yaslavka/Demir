const {DataTypes} = require("sequelize");
const sequelize = require("../../../db");
const {Goroda} = require("../GorodaModals");

const Hotel = sequelize.define('hotel', {
    id: {type: DataTypes.BIGINT, primaryKey: true, autoIncrement: 11},
    nemeHotel:{type: DataTypes.STRING, allowNull: false},
    imageHotel:{type: DataTypes.STRING, allowNull: false},
    wifi:{type: DataTypes.BOOLEAN, defaultValue: false},
    zavtrak:{type: DataTypes.BOOLEAN, defaultValue: false},
    basein:{type: DataTypes.BOOLEAN, defaultValue: false},
    skidka:{type: DataTypes.DECIMAL(61, 2), defaultValue: 0.0},
    address:{type: DataTypes.STRING, allowNull: false},
    phone:{type: DataTypes.STRING, defaultValue: null},
    email:{type: DataTypes.STRING, defaultValue: null},
    bal: {type: DataTypes.DECIMAL(61, 2), defaultValue: 0.0},
    price:{type: DataTypes.DECIMAL(61, 2), defaultValue: 0.00, allowNull: false},
    kolicestvoNomerov:{type: DataTypes.DECIMAL, defaultValue: 0},
    rating:{type: DataTypes.DECIMAL(61, 1), defaultValue: 0.0},
    distanceto:{type: DataTypes.DECIMAL(61, 1), defaultValue: 0.0},
    distanceout:{type: DataTypes.DECIMAL(61, 1), defaultValue: 0.0},
    distancecenter:{type: DataTypes.DECIMAL(61, 1), defaultValue: 0.0},
    distancevokzal:{type: DataTypes.DECIMAL(61, 1), defaultValue: 0.0},
    typehotel:{type: DataTypes.STRING, defaultValue: null},
    typenomera:{type: DataTypes.TEXT, defaultValue: null},
    oposanieHotel:{type: DataTypes.TEXT, defaultValue: null},
    activ:{type: DataTypes.BOOLEAN, defaultValue: false},
    pay:{type: DataTypes.BOOLEAN, defaultValue: false},
    gorodaId: {type: DataTypes.BIGINT, defaultValue: null},
})
Goroda.hasMany(Hotel, {as: "hotel"});
Hotel.belongsTo(Goroda, {as: 'goroda'});

module.exports= {Hotel}
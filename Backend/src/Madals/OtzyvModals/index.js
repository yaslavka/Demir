const {DataTypes} = require("sequelize");
const sequelize = require("../../../db");
const {Hotel} = require("../OtelModals");

const Otzyv = sequelize.define('otzyv', {
    id: {type: DataTypes.BIGINT, primaryKey: true, autoIncrement: 11},
    dostoinstva:{type: DataTypes.TEXT, allowNull: false},
    minusy:{type: DataTypes.TEXT, allowNull: false},
    komfort:{type: DataTypes.STRING, allowNull: false},
    vejliv:{type: DataTypes.STRING, allowNull: false},
    first_name: {type: DataTypes.STRING, allowNull: false},
    avatar: {type: DataTypes.STRING, defaultValue: null},
    gorod:{type: DataTypes.STRING, defaultValue: null},
    ocenka:{type: DataTypes.INTEGER(61, 0), defaultValue: 0.0, allowNull: false},
    hotelId:{type: DataTypes.BIGINT, defaultValue: null},
})
Hotel.hasMany(Otzyv, {as: "otzyv"});
Otzyv.belongsTo(Hotel, {as: 'hotel'});
module.exports ={Otzyv}
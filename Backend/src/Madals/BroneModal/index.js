const sequelize = require("../../../db");
const {DataTypes} = require("sequelize");
const {Nomera} = require("../Nomeramodals");
const {User} = require("../UserModals");
const {Hotel} = require("../OtelModals");

const Brone = sequelize.define('brone', {
    id: {type: DataTypes.BIGINT, primaryKey: true, autoIncrement: 11},
    status1:{type: DataTypes.BOOLEAN, defaultValue: false},
    status2:{type: DataTypes.BOOLEAN, defaultValue: false},
    status3:{type: DataTypes.BOOLEAN, defaultValue: false},
    status4:{type: DataTypes.BOOLEAN, defaultValue: false},
    datestart:{type: DataTypes.DATE, allowNull: false},
    dateend:{type: DataTypes.DATE, allowNull: false},
    summ: {type: DataTypes.DECIMAL(61, 2), defaultValue: 0.0, allowNull: false},
    pioplesumm: {type: DataTypes.DECIMAL, defaultValue: 0, allowNull: false},
    children: {type: DataTypes.DECIMAL, defaultValue: 0.0, allowNull: false},
    hotelId:{type: DataTypes.BIGINT, defaultValue: null},
    userId:{type: DataTypes.BIGINT, defaultValue: null},
    nomeraId:{type: DataTypes.BIGINT, defaultValue: null},
})
Hotel.hasMany(Brone, {as:'brone'})
Brone.belongsTo(Hotel, {as: 'hotel'})
User.hasMany(Brone, {as:'brone'})
Brone.belongsTo(User, {as: 'user'})
Nomera.hasMany(Brone, {as:'brone'})
Brone.belongsTo(Nomera, {as: 'nomera'})

module.exports = {Brone}
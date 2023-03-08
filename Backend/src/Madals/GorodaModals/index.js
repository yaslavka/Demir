const {DataTypes} = require("sequelize");
const sequelize = require("../../../db");

const Goroda = sequelize.define('goroda', {
    id: {type: DataTypes.BIGINT, primaryKey: true, autoIncrement: 11},
    gorod: {type: DataTypes.STRING, allowNull: false},
    photo: {type: DataTypes.STRING, allowNull: false},
    oblast: {type: DataTypes.STRING, allowNull: false},
    sitiinfo:{type: DataTypes.STRING, allowNull: false},
})
module.exports = {Goroda}
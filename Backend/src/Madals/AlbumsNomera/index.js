const {DataTypes} = require("sequelize");
const sequelize = require("../../../db");
const {Nomera} = require("../Nomeramodals");


const AlbumsNomera = sequelize.define('albomsnomera', {
    id: {type: DataTypes.BIGINT, primaryKey: true, autoIncrement: 11},
    photonomerov:{type: DataTypes.STRING, allowNull: false},
})
Nomera.hasMany(AlbumsNomera, {as: "albomsnomera"});
AlbumsNomera.belongsTo(Nomera, {as: 'nomera'});
module.exports = {AlbumsNomera}
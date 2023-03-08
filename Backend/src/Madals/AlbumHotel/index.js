const {DataTypes} = require("sequelize");
const sequelize = require("../../../db");
const {Hotel} = require("../OtelModals");

const AlbumHotel = sequelize.define('albumhotel', {
    id: {type: DataTypes.BIGINT, primaryKey: true, autoIncrement: 11},
    photohotel:{type: DataTypes.STRING, allowNull: false},
    hotelId:{type: DataTypes.BIGINT, defaultValue: null},
})
Hotel.hasMany(AlbumHotel, {as: "albumhotel"});
AlbumHotel.belongsTo(Hotel, {as: 'hotel'});
module.exports = {AlbumHotel}
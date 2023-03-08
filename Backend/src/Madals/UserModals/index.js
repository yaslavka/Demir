const sequelize = require("../../../db");
const {Goroda} = require("../GorodaModals");
const {DataTypes} = require("sequelize");

const User = sequelize.define(
    "user",
    {
        id: {type: DataTypes.BIGINT, primaryKey: true, autoIncrement: 11},
            username: {type: DataTypes.STRING, allowNull: false},
        first_name: {type: DataTypes.STRING, allowNull: false},
        last_name: {type: DataTypes.STRING, allowNull: false},
        phone: {type: DataTypes.STRING, allowNull: false},
        email: {type: DataTypes.STRING, allowNull: false},
        password: {type: DataTypes.STRING, allowNull: false},
        avatar: {type: DataTypes.STRING, defaultValue: null},
        balance: {type: DataTypes.INTEGER(61, 2), defaultValue: 0.00, allowNull: false},
        description: {type: DataTypes.STRING, defaultValue: null},
        rolleadmin: {type: DataTypes.BOOLEAN, defaultValue: false},
        rolleManejer: {type: DataTypes.BOOLEAN, defaultValue: false},
            referal_id: {type: DataTypes.BIGINT, defaultValue: null},
    },
);
Goroda.hasMany(User, {as: "user"});
User.belongsTo(Goroda, {as: 'goroda'});

module.exports = {User}
const { DataTypes, Model } = require("sequelize");
const sequelize = require('../config/connection');

class User extends Model {};

User.init({
    userName: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, { sequelize, modelName: "User" });

module.exports = User;
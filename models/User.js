const { DataTypes, Model } = require("sequelize");
const sequelize = require('../config/connection');

class User extends Model {};

User.init({
    username: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    id: {
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
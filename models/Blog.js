const { DataTypes, Model } = require("sequelize");
const sequelize = require('../config/connection');

class Blog extends Model {};

Blog.init({
    contents: {
        type: DataTypes.STRING,
        allowNull: false
    },
    postTitle: {
        type: DataTypes.STRING,
        allowNull: false
    },
    userName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dateCreated: {
        type: DataTypes.DATE,
        allowNull: false
    }

}, { sequelize, modelName: "Blog" });

module.exports = Blog;
const { DataTypes, Model } = require("sequelize");
const sequelize = require('../config/connection');

class Post extends Model {};

Post.init({
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

}, { sequelize, modelName: "Post" });

module.exports = Post;
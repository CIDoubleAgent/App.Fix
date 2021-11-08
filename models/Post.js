const { DataTypes, Model } = require("sequelize");
const sequelize = require('../config/connection');

class Post extends Model {};

Post.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    postContents: {
        type: DataTypes.STRING,
        defaultValue: "",
        allowNull: false
    },
    postTitle: {
        type: DataTypes.STRING,
        defaultValue: "",
        allowNull: false
    },
    dateCreated: {
        type: DataTypes.DATE,
        allowNull: false
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
      },

}, { sequelize, modelName: "Post" });

module.exports = Post;
const { DataTypes } = require("sequelize");

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

});

module.exports = Blog;
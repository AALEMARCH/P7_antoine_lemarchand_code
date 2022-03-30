"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Post.belongsTo(models.User, {
        foreignKey: {
          allowNull: false,
        },
        onDelete: "CASCADE",
      });
      models.Post.hasMany(models.Comment);
      models.Post.hasMany(models.Like);
    }
  }
  Post.init(
    {
      title: { type: DataTypes.STRING, allowNull: false },
      content: { type: DataTypes.TEXT, allowNull: false },
      attachment: { type: DataTypes.STRING, allowNull: true },
    },
    {
      sequelize,
      //define table name
      tableName: "posts",
      modelName: "Post",
    }
  );
  return Post;
};

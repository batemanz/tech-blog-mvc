const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
    {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        body: {
          type: DataTypes.STRING,
          allowNull: false
        },
        date_created: {
          type: DataTypes.DATE,
          allowNull: false,
          defaultValue: DataTypes.NOW
        },
        user_id: {
          type: DataTypes.INTEGER,
          references: {
            model: "User",
            key: "id"
          }
        },
        postId: {
          type: DataTypes.INTEGER,
          references: {
            model: "Post",
            key: "id"
          }
        }
      },
      {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "Comment"
      }
    );

module.exports = Comment;   
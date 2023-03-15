const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Tag extends Model {}

Tag.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    tag_name: {
      type: DataTypes.STRING,
    }
  },
  {
    hooks: {
      beforeCreate: async (newTagData) => {
        newTagData.tag_name = await newTagData.tag_name.toLowerCase();
        return newTagData;
      },
      beforeUpdate: async (updatedTagData) => {
        updatedTagData.tag_name = await updatedTagData.tag_name.toLowerCase();
        return updatedTagData;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;

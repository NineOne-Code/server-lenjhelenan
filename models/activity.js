"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Activity extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Activity.belongsTo(models.Item, {
        foreignKey: "itemId",
      });
    }
  }
  Activity.init(
    {
      name: DataTypes.STRING,
      type: DataTypes.STRING,
      imageUrl: DataTypes.STRING,
      isPopular: DataTypes.BOOLEAN,
      itemId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Activity",
      tableName: "activity",
    }
  );
  return Activity;
};

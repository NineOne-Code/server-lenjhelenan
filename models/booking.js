"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Booking.init(
    {
      invoice: DataTypes.STRING,
      bookingStartDate: DataTypes.DATE,
      bookingEndDate: DataTypes.DATE,
      total: DataTypes.BIGINT,
      payments: DataTypes.BIGINT,
    },
    {
      sequelize,
      modelName: "Booking",
      tableName: "booking",
    }
  );
  return Booking;
};
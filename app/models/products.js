"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Products.init(
    {
      product_name: DataTypes.STRING,
      price: DataTypes.INTEGER,
      category: DataTypes.ENUM("Hobi", "Kendaraan", "Baju", "Elektronik", "Kesehatan"),
      description: DataTypes.TEXT,
      product_photo: DataTypes.STRING,
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "Users",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "Products",
    }
  );
  return Products;
};

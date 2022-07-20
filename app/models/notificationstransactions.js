'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class NotificationsTransactions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  NotificationsTransactions.init({
    products_id: {
      type:DataTypes.INTEGER,
      references: {
        model: 'Products',
        key: 'id'
      }
     },
    harga_tawar: DataTypes.INTEGER,
    user_id: {
      type:DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id'
      }
     }
  }, {
    sequelize,
    modelName: 'NotificationsTransactions',
  });
  return NotificationsTransactions;
};
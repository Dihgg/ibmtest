'use strict';
module.exports = (sequelize, DataTypes) => {
  const List = sequelize.define('Item', {
    name: DataTypes.STRING,
    qty: DataTypes.INTEGER,
    checked: DataTypes.INTEGER
  }, { paranoid: true });
  List.associate = function(models) {
    // associations can be defined here
  };
  return List;
};
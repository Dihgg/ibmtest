'use strict';
module.exports = (sequelize, DataTypes) => {
  const List = sequelize.define('item', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING,
    qty: DataTypes.INTEGER,
    checked: DataTypes.INTEGER
  }, { paranoid: true });
  List.associate = function(models) {
    // associations can be defined here
  };
  return List;
};
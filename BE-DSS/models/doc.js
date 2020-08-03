'use strict';
module.exports = (sequelize, DataTypes) => {
  const doc = sequelize.define('doc', {
    url: DataTypes.STRING,
    docName: DataTypes.STRING,
    isSigned: DataTypes.BOOLEAN
  }, {});
  doc.associate = function(models) {
    // associations can be defined here
  };
  return doc;
};
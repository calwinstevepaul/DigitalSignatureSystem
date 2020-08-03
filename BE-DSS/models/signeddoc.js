'use strict';
module.exports = (sequelize, DataTypes) => {
  const signedDoc = sequelize.define('signedDoc', {
    userId: DataTypes.INTEGER,
    docId: DataTypes.INTEGER,
    sign: DataTypes.STRING,
    pageNumber: DataTypes.STRING
  }, {});
  signedDoc.associate = function(models) {
    // associations can be defined here
    signedDoc.belongsTo(models.user)
    signedDoc.belongsTo(models.doc)
    
  };
  return signedDoc;
};
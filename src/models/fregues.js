'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class fregues extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  fregues.init({
    id: {
      type:DataTypes.STRING,
      primaryKey: true
    },
    codigoDeBarra: DataTypes.STRING,
    tamanhoPe: DataTypes.BOOLEAN
    
  }, {
    sequelize,
    modelName: 'fregues',
  });
  return fregues;
};
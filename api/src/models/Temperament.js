const { DataTypes } = require('sequelize'); // el require de DT sirve para poder hacer funcionar la funcion de abajo

module.exports = (sequelize) => {
    sequelize.define('temperament', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    },
    { timestamps: false });
  };
  // esto no es el modelo, esto exporta una funcion que define el modelo, el modelo esta en la db.
  // el m.e se comunica con db.js y le da forma a las tablas e indica que contenido tiene que tener etc etc.
  // timestamps deshabilita las fechas esas en la DB 
  // el sequelize es el que esta definido en db.js y define aqui el modelo de temperaments para las tablas.

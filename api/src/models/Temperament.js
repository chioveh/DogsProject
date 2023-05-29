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
        unique: true
      }
    });
  };
  // esto no es el modelo, esto exporta una funcion que define el modelo, el modelo esta en la db.
  // el m.e le da forma a las tablas e indica que contenido tiene que tener etc etc.

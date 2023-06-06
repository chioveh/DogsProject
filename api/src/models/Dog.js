const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Dog', {
    id: {
      type: DataTypes.UUID, // UUID es un identificador unico
      defaultValue: DataTypes.UUIDV4, 
      primaryKey: true, // squelize nos pide indicar si es una PK
      allowNull: false, // tiene que tener un valor si o si
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true// valor unico
    },
    min_height: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    max_height: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    min_weight: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    max_weight: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    life_span: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true// es opcional
    },
    createdInDb: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }  
  },
  { timestamps: false });//indica que la tabla no tendrá columnas de "createdAt" y "updatedAt".
};
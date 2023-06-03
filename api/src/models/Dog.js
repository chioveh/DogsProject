const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('dog', {
    id: {
      type: DataTypes.UUID, // UUID es un identificador unico
      defaultValue: DataTypes.UUIDV4, 
      primaryKey: true, // squelize nos pide indicar si es una PK
      allowNull: false, // tiene que tener un valor si o si
      unique: true,
    },
    name: {
      type: DataTypes.STRING, // string xq es texto "corto"
      allowNull: false, // allowNull es para saber si se permite que este null (NO)
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    height: { 
      type: DataTypes.INTEGER, 
      allowNull: false,
    },
    weight: {
     type: DataTypes.INTEGER, 
     allowNull: false,
    },
    life_span: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    created: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: false,
    },
  },
  { timestamps: false })
};
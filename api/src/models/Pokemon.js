const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false
    },
    img: {
      type: DataTypes.STRING,
      defaultValue: 'https://es-static.z-dn.net/files/dc9/78ac3c106941398a18ca7ef16ff38d39.png'
    },
    health: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
    },
    attack: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
    },
    defense: {
      type: DataTypes.INTEGER,
      defaultValue: 1
    },
    speed: {
      type: DataTypes.INTEGER,
      defaultValue: 1
    },
    height: {
      type: DataTypes.INTEGER,
      defaultValue: 1
    },
    weight: {
      type: DataTypes.INTEGER,
      defaultValue: 1
    }
  }, { timestamps: false });
};

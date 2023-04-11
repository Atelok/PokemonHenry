const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Pokemon', {
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
      
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    image:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    life:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    attack:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    defense:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    velocity:{
      type: DataTypes.INTEGER,
      
    },
    height:{
      type: DataTypes.DECIMAL(7, 2),

    },
    weigth:{
      type: DataTypes.DECIMAL(7, 2),
    }
    
  },{
    timestamps:false
  });
};
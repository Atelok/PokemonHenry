const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Pokemon', {
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      
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
    weight:{
      type: DataTypes.DECIMAL(7, 2),
    },
    create:{
      type:DataTypes.BOOLEAN,
      defaultValue:true,
    }
  },{
    timestamps:false
  });
};
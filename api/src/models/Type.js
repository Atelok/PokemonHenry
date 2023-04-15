const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
    sequelize.define('Type', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        create:{
            type:DataTypes.BOOLEAN,
            defaultValue:true,
        }

    }, {
        timestamps: false
    })

}
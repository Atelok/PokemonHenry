const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
    sequelize.define('Type', {

        name: {
            type: DataTypes.STRING,
            allowNull: false,
            // unique: true
        },
        create:{
            type:DataTypes.BOOLEAN,
            defaultValue:true,
        }

    }, {
        timestamps: false
    })

}
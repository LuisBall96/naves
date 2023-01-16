const { DataTypes } = require("sequelize");
const sequelize = require("../db/database.js");

const Nave = sequelize.define('naves',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre:{
        type: DataTypes.STRING,
    },
    hayTripulantes:{
        type: DataTypes.BOOLEAN,
    },
    paisCreador: {
        type: DataTypes.STRING,
    },
    peso:{
        type: DataTypes.INTEGER
    },
    tipoRecorrido:{
        type: DataTypes.STRING
    }
});

module.exports = Nave
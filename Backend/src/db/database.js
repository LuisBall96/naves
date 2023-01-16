const Sequelize = require ("sequelize");

//Conección  a la base de datos
const sequelize = new Sequelize('naves', 'postgres', ' password',{
    host: 'localhost',
    dialect: "postgres",
});

module.exports = sequelize;
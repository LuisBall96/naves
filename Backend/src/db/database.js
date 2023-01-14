const Sequelize = require ("sequelize");


const sequelize = new Sequelize('naves', 'postgres', ' password',{
    host: 'localhost',
    dialect: "postgres",
});

module.exports = sequelize;
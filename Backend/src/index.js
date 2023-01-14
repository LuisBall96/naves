const app = require ("./app.js");
const sequelize = require("./db/database.js");



async function main (){
    try {
        await sequelize.sync({force: false});
        app.listen(3001);
        console.log('Server listening in port', 3001);
    } catch (error) {
        console.log(error);
    } 
}

main();


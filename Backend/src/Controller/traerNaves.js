const Nave = require("../Model/Nave.js");

const traerNaves = async () => {
    try {
        const naves = await Nave.findAll();  //Método de búsqueda de Sequelize, hace las veces de SELECT *
    
        return naves //Retorno naves para usarla en la función de abajo
        
    } catch (error) {
        console.log(error);
    }
}


const traerNaveNombre = async (req,res) => {
    try {
        const data = await traerNaves();
    const {nombre} = req.query; //Búsqueda por query
    if (nombre) {
        let buscando = data.filter((ele) =>
          ele.nombre.toLowerCase().includes(nombre.toLowerCase()) //Si escribo el nombre de la nave en mayúscula o minúscula 
        );
        
        res.json(buscando.lenght === 0 ? 'No existen naves por el momento': buscando)
    }
    else{
        res.json(data.lenght === 0 ? 'No existen naves por el momento': data)
    }
    } catch (error) {
        console.log(error);
    }
    
   
}




module.exports = traerNaveNombre
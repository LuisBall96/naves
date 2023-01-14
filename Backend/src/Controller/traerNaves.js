const Nave = require("../Model/Nave.js");

const traerNaves = async (req,res) => {
    try {
        const naves = await Nave.findAll(); 
        // res.json(naves.lenght === 0 ? 'No existen naves por el momento': naves ) 
    
        return naves
        
    } catch (error) {
        console.log(error);
    }
}


const traerNaveNombre = async (req,res) => {
    try {
        const data = await traerNaves();
    const {nombre} = req.query;
    if (nombre) {
        let buscando = data.filter((ele) =>
          ele.nombre.toLowerCase().includes(nombre.toLowerCase())
        );
        
        res.json(buscando)
    }
    else{
        res.send(data)
    }
    } catch (error) {
        console.log(error);
    }
    
   
}




module.exports = traerNaveNombre
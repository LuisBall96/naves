const Nave = require ('../Model/Nave.js')


const crearNaves = async(req, res) =>{
    try {
        const {nombre, hayTripulantes, paisCreador, peso, tipoRecorrido} = req.body
        
        const nuevaNave = await Nave.create({
            nombre,
            hayTripulantes,
            paisCreador,
            peso,
            tipoRecorrido,
        });
        res.json(nuevaNave);
       

    } catch (error) {
        console.log(error);
    }


}





module.exports = crearNaves
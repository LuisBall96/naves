const Nave = require ('../Model/Nave.js') //Traigo el modelo para poder crear instancias de él por medio del método post


const crearNaves = async(req, res) =>{ //función asíncrona
    try {
        const {nombre, hayTripulantes, paisCreador, peso, tipoRecorrido} = req.body //Traigo los atributos que voy a usar
        
        const nuevaNave = await Nave.create({ //Utilizo método de sequelize create - hace las veces de INSERT INTO  
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
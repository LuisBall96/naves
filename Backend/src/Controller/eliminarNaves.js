const Nave = require ('../Model/Nave.js')


const eliminarNave = async (req, res) => {
try {
    const {id} = req.params //Traigo por medio del params '/' el current id
    const eliminarNave = await Nave.destroy({ //método de sequelize
        where:{ //Elimina la nave -cuyo- ID sea...
            id
        }
    });
    res.json('Nave eliminada con éxito')

} catch (error) {
    console.log(error);
    }
    
}



module.exports = eliminarNave //para modularizar
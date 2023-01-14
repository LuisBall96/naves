const Nave = require ('../Model/Nave.js')


const eliminarNave = async (req, res) => {
try {
    const {id} = req.params
    const eliminarNave = await Nave.destroy({ 
        where:{
            id
        }
    });
    res.json('Nave eliminada con éxito')

} catch (error) {
    console.log(error);
    }
    
}



module.exports = eliminarNave
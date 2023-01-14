const Nave = require("../Model/Nave.js");

const traerUnaNave = async (req,res) => {
    try {
        const {id} = req.params;
        const naves = await Nave.findOne({
            where: {
                id
            }
        });
        res.json(naves)
    } catch (error) {
        console.log(error);
    }
}



module.exports = traerUnaNave
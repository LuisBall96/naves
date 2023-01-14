const {Router} = require("express");
const crearNaves = require("../Controller/crearNaves");
const eliminarNave = require("../Controller/eliminarNaves");
const traerNaves = require("../Controller/traerNaves");
const traerUnaNave = require("../Controller/traerUnaNave");

const router = Router();


router.get("/nave",traerNaves);
router.get("/nave/:id", traerUnaNave)
router.post("/crearNave", crearNaves);
router.delete("/nave/:id", eliminarNave)


module.exports = router;
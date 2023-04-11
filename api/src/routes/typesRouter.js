const { Router } = require('express');


const typesRouter = Router();

typesRouter.get("/", (req, res)=>{

    res.status(200).send({message: "Obtiene un arreglo con los tipos de pokemones, En una primera instancia, cuando la base de datos este vacía, deberás guardar todos los tipos que encuentres en la API, Estos deben ser obtenidos de la API (se evaluará que no haya hardcodeo). Luego de obtenerlos de la API, deben ser guardados en la base de datos para su posterior consumo desde allí"})
    })





module.exports = typesRouter;
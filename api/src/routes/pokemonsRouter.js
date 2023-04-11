const { Router } = require('express');


const pokemonsRouter = Router();

pokemonsRouter.get("/", (req, res) => {

    res.status(200).send({ message: "Obtiene un arreglo de objetos, donde cada objeto es un pokemon con su información" })
})

pokemonsRouter.get('/name?="..."', (req, res) => {

    res.status(200).send({ message: `1° obtener todos aquellos pokemons que coinciden con el nombre recibido por query \n 2° Debe poder buscarlo independientemente de mayúsculas o minúsculas \n 3° Si no existe el pokemon, debe mostrar un mensaje adecuado \n 4° Debe buscar tanto los de la API como los de la base de datos ` })
})

pokemonsRouter.get("/:idPokemon", (req, res) => {

    res.status(200).send({ message: "detalle de un pokemon específico, pokemon es recibido por parámetro (ID),datos del tipo de pokemon al que está asociado, tanto para los pokemones de la API como para los de la base de datos" })
})



pokemonsRouter.post("/", (req, res) => {

    res.status(200).json({ message: `datos necesarios para crear un pokemon y relacionarlo con sus tipos solicitados \n informacion por body \n un pokemon en la base de datos debe estar relacionado con sus tipos indicados (al menos uno)` })
})




module.exports = pokemonsRouter;
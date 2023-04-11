const { Router } = require('express');
const pokemonsRouter = require("./pokemonsRouter")
const typesRouter = require("./typesRouter")

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use( "/pokemons", pokemonsRouter);
router.use( "/types", typesRouter);




// router.get("/pokemons", (req, res)=>{

// res.status(200).send({message: "Obtiene un arreglo de objetos, donde cada objeto es un pokemon con su información"})
// })


//! borrar el :id
// router.get("/pokemons/:idPokemon", (req, res)=>{

// res.status(200).send({message: "detalle de un pokemon específico, pokemon es recibido por parámetro (ID),datos del tipo de pokemon al que está asociado, tanto para los pokemones de la API como para los de la base de datos"}) 
// })

//! eliminar despues de pokemons, creo que es query
// router.get('/pokemons/name?="..."', (req, res)=>{

//     res.status(200).send({message: `1° obtener todos aquellos pokemons que coinciden con el nombre recibido por query \n 2° Debe poder buscarlo independientemente de mayúsculas o minúsculas \n 3° Si no existe el pokemon, debe mostrar un mensaje adecuado \n 4° Debe buscar tanto los de la API como los de la base de datos `}) 
//     })

// router.post( "/pokemons", (req, res)=>{

//     res.status(200).json({message: `datos necesarios para crear un pokemon y relacionarlo con sus tipos solicitados \n informacion por body \n un pokemon en la base de datos debe estar relacionado con sus tipos indicados (al menos uno)`}) 
//     })

// router.get("/types", (req, res)=>{

//     res.status(200).send({message: "Obtiene un arreglo con los tipos de pokemones, En una primera instancia, cuando la base de datos este vacía, deberás guardar todos los tipos que encuentres en la API, Estos deben ser obtenidos de la API (se evaluará que no haya hardcodeo). Luego de obtenerlos de la API, deben ser guardados en la base de datos para su posterior consumo desde allí"})
//     })

module.exports = router;

const { Router } = require('express');
const { getPokemonsHandler, getSamePokemonHandler, getPokemonhandler, createPokemonHandler } = require("../handlers/PokemonsHandler")

const pokemonsRouter = Router();


pokemonsRouter.get("/", getPokemonsHandler)
pokemonsRouter.get('/name', getSamePokemonHandler)
pokemonsRouter.get("/:idPokemon", getPokemonhandler)
pokemonsRouter.post("/", createPokemonHandler)



module.exports = pokemonsRouter;
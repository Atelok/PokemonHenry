const { Router } = require('express');
const { getPokemonsHandler, getSamePokemonHandler, getPokemonhandler, createPokemonHandler, deletePokemonHandler } = require("../handlers/PokemonsHandler")

const pokemonsRouter = Router();


pokemonsRouter.get("/", getPokemonsHandler)
pokemonsRouter.get('/name', getSamePokemonHandler)
pokemonsRouter.get("/:idPokemon", getPokemonhandler)
pokemonsRouter.post("/", createPokemonHandler)
pokemonsRouter.delete("/", deletePokemonHandler)



module.exports = pokemonsRouter;
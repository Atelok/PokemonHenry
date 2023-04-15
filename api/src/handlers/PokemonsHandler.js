const createPokemon = require("../Controllers/CreatePokemon")
const getPokemonByiD = require("../Controllers/getPokemon")
const getPokemonByName = require("../Controllers/getPokemonbyName")
const getAllPokemons =  require("../Controllers/getAllPokemons")

// -------------------------1-------------------------//

const getPokemonsHandler = async (req, res) => {

    try {
        res.status(201).json( await getAllPokemons())
    } catch (error) {
        
        res.status(500).json({error: error.message})
    }


}



// -------------------------2-------------------------//


const getSamePokemonHandler = async (req, res) => {
    const { name } = req.query;
    const name2 = name.toLowerCase()

try {
    res.status(201).json(await getPokemonByName(name2))
} catch (error) {
    res.status(404).json({error:error.message})
}


}

//----Los de arriba se pueden fusionar-------//

// -------------------------3-------------------------//

const getPokemonhandler = async (req, res) => {
    const { idPokemon } = req.params;

    const verify = isNaN(idPokemon) ? "BDD" : "API"

    try {
        res.status(201).json(await getPokemonByiD(idPokemon, verify))
    } catch (error) {
        res.status(400).json({ error: error.message })
    }

}



// -------------------------4-------------------------//
const createPokemonHandler = async (req, res) => {
    const { id, name, image, life, attack, defense, velocity, height, weigth, types } = req.body;
    
    try {
        const newPoke = await createPokemon(id, name, image, life, attack, defense, velocity, height, weigth, types)

        
        res.status(201).json({ message: `Pokemon creado correctamente ${newPoke.name}` })
    } catch (error) {
        res.status(404).json({ error: error.message })
    }
}



module.exports = { getPokemonsHandler, getSamePokemonHandler, getPokemonhandler, createPokemonHandler }
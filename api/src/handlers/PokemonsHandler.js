const createPokemon = require("../Controllers/CreatePokemon")
const getPokemonByiD = require("../Controllers/getPokemon")
const getPokemonByName = require("../Controllers/getPokemonbyName")
const getAllPokemons =  require("../Controllers/getAllPokemons")
const deletePokemon = require("../Controllers/deletePokemon")

// -------------------------1) Obtener todos los Pokemons-------------------------//

const getPokemonsHandler = async (req, res) => {

    try {
        res.status(201).json( await getAllPokemons())
    } catch (error) {
        
        res.status(500).json({error: error.message})
    }


}



// -------------------------2) Obtener Pokemon por nombre-------------------------//


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

// -------------------------3) Obtener Pokemon by ID-------------------------//

const getPokemonhandler = async (req, res) => {
    const { idPokemon } = req.params;

    const verify = isNaN(idPokemon) ? "BDD" : "API"

    try {
        res.status(201).json(await getPokemonByiD(idPokemon, verify))
    } catch (error) {
        res.status(400).json({ error: error.message })
    }

}



// -------------------------4) Create Pokemon-------------------------//

const createPokemonHandler = async (req, res) => {
    const { id, name, image, life, attack, defense, velocity, height, weight, Types } = req.body;
    
    try {
        const newPoke = await createPokemon(id, name, image, life, attack, defense, velocity, height, weight, Types)

        
        res.status(201).json({ message: `Pokemon creado correctamente ${newPoke.name}` })
    } catch (error) {
        res.status(404).json({ error: error.message })
    }
}



//---------DeletePokemon----------//

const deletePokemonHandler = async (req, res)=>{
    const {name} = req.body;

    try {
        const deleted = await deletePokemon(name)
        res.status(201).json ({message: "Pokemon liberado correctamente"})
        
    } catch (error) {
        
        res.status(404).json ({message: error.message})
    }

}



module.exports = { getPokemonsHandler, getSamePokemonHandler, getPokemonhandler, createPokemonHandler, deletePokemonHandler }
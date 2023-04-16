const {Pokemon} = require("../db");

const createPokemon = async(id, name, image, life, attack, defense, velocity, height, weight, Types)=>{
    if (name && image && life &&  attack && defense) {
        
        const newPokemon = await Pokemon.create({id, name, image, life, attack, defense, velocity, height, weight, create:true})
        await newPokemon.addTypes(Types)
        return newPokemon;
    }else{

        throw new Error("Necesitas colocar toda la información")
    }
}

module.exports = createPokemon;
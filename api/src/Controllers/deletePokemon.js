const { Pokemon } = require("../db");

const deletePokemon = async (namePoke)=>{
if (namePoke) {
    
    const poke = await Pokemon.findOne({where:{name: namePoke}})
    if (poke) {
        await poke.destroy();
    }
    else{
        throw new Error ("Error al liberar Pokemón, nombre incorrecto")
    }
}
else{

    throw new Error ("Error al liberar Pokemón, nombre incorrecto")
}

}

module.exports = deletePokemon;
const axios = require("axios")

const { Pokemon, Type } = require("../db")

//-------------ESTA ES LA BASICA--------------//
const getPokemonByiD = async (idPokemon, verify) => {
// Que tipo de ID estoy hablando
// Puede que no llegué ningun ID existente

    if (verify === "API") {

        if (idPokemon) {
            return await axios.get(`https://pokeapi.co/api/v2/pokemon/${idPokemon}`)
                .then((response) => response.data)
                .then((data) => {
                    const { id, name, sprites, stats, height, weight, types} = data
                    
                    // map para los types
                    const typ = types.map((typ)=> typ.type.name)
                    
                    return {
                        id,
                        name,
                        image: sprites.other.dream_world.front_default || sprites.other["official-artwork"].front_default,
                        life: stats[0].base_stat,
                        attack: stats[1].base_stat,
                        defense: stats[2].base_stat,
                        velocity: stats[5].base_stat,
                        height: height/10,
                        weight: weight/10,
                        Types: typ,
                        create: false
                    }
                })
                .catch((error) => {
                    throw new Error("idPokemon no es un valor válido")
                })
        }
    }
    else {

        if (idPokemon !== null && idPokemon !== undefined) {
            const pokem = await Pokemon.findByPk(idPokemon,{include:[{model: Type, 
                attributes:["name"],    
                through:{ attributes:[]} 
            }]
            });
            const pokeDex = {...pokem.toJSON(), Types: pokem.Types.map((typ)=> typ.name)}

            if (pokem) {
                return pokeDex
            }
            else {
                throw new Error("No se ha creado aún ese Pokémon");
            }
        } else {

            throw new Error("idPokemon no es un valor válido")
        }


    }
}

module.exports = getPokemonByiD;

const axios = require("axios")
const {Pokemon, Type} = require("../db")

const getAllPokemons = async () => {
    const arrayPokeUrl = [];

    const pokeBdd = await Pokemon.findAll(
        {include:[{model: Type, 
            attributes:["name"],    
            through:{ attributes:[]} 
        }]
        })
    const pokeDex = pokeBdd.map((poke)=>{
        return {...poke.toJSON(), Types: poke.Types.map(type => type.name)}

    })

    for (let i = 1; i <= 30; i++) {

        let pokeUrl = `https://pokeapi.co/api/v2/pokemon/${i}`
        arrayPokeUrl.push(pokeUrl)
    }

    const mapeamos =  arrayPokeUrl.map((url) => {
    return   axios.get(url)
            .then((res) => res.data)
            .then((data) => {
                const { id, name, sprites, stats, height, weight, types} = data

                return {
                    id,
                    name,
                    image: sprites.other.dream_world.front_default,
                    life: stats[0].base_stat,
                    attack: stats[1].base_stat,
                    defense: stats[2].base_stat,
                    velocity: stats[5].base_stat,
                    height,
                    weight,
                    Types: types.map((typ)=> typ.type.name),
                    create: false
                }
            })
    })
    let pokeApi = Promise.all(mapeamos) 

    return (await pokeApi).concat(pokeDex)
}
module.exports = getAllPokemons;





/* ----------------------------- */

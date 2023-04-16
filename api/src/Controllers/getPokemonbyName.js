const axios = require("axios");
const { Pokemon, Type } = require("../db.js")
const {Op} = require("sequelize")

const getPokemonByName = async (name2) => {

    try {

        const pokemon = await Pokemon.findAll({ 
            where: { 
                name: { [Op.iLike]: `%${name2}%`}},   
                include:[{
                    model: Type, 
                    attributes:["name"],    
                    through:{ attributes:[]} 
                    }]
                } )
        if (pokemon.length) {

            const formattedPokemon = pokemon.map(poke => {
                return {
                    ...poke.toJSON(),
                    Types: poke.Types.map(type => type.name)
                };
            });
            return formattedPokemon;
        }
        else {

            const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name2}`);
            
            if (data.name.includes(name2)) {
                return {
                            id: data.id,
                            name: data.name,
                            image: data.sprites.other.dream_world.front_default,
                            life: data.stats[0].base_stat,
                            attack: data.stats[1].base_stat,
                            defense: data.stats[2].base_stat,
                            velocity: data.stats[5].base_stat,
                            height: data.height,
                            weight: data.weight,
                            Types: data.types.map((typ)=> typ.type.name),
                            create: false
                        };
            }else{
                throw new Error("Colocar el nombre correctamente");}

        }
    } catch (error) {
        throw new Error("Colocar el nombre correctamente");
    }







    


        //     if (data.name !== name2) {
        //         throw new Error("Colocar el nombre correctamente");
        //     }
        //     else{

        //         return {
        //         id: data.id,
        //         name: data.name,
        //         image: data.sprites.other.dream_world.front_default,
        //         life: data.stats[0].base_stat,
        //         attack: data.stats[1].base_stat,
        //         defense: data.stats[2].base_stat,
        //         velocity: data.stats[5].base_stat,
        //         height: data.height,
        //         weight: data.weight,
        //         Types: data.types.map((typ)=> typ.type.name),
        //         create: false
        //     };
        // }

    //----------------------------------


    // if (name2) {
    //     return await axios.get(`https://pokeapi.co/api/v2/pokemon/${name2}`)

    //         .then((res) => res.data)
    //         .then((data) => {
    //             let { id, name, sprites, stats, height, weight } = data;
    //             if (name === name2) {
    //                 return {
    //                     id,
    //                     name,
    //                     image: sprites.other.dream_world.front_default,
    //                     life: stats[0].base_stat,
    //                     attack: stats[1].base_stat,
    //                     defense: stats[2].base_stat,
    //                     velocity: stats[5].base_stat,
    //                     height,
    //                     weight,
    //                 }
    //             }
    //             else{
    //                 throw new Error("Colocar el nombre correctamente")
    //             }

    //         });
    // }else{
    //     throw new Error("Colocar el nombre correctamente")
    // }

    // if (name2) {
    //     return Promise.all(await axios.get("https://pokeapi.co/api/v2/pokemon")
    //         .then((res) => res.data)
    //         .then((data) => data.results.map((poke) => {

    //             if (poke.name === name2) {
    //                 let url = poke.url
    //                 return axios.get(`${url}`)
    //                     .then((resp) => resp.data)
    //                     .then((data2) => {

    //                         let { id, name, sprites, stats, height, weight } = data2

    //                         return {
    //                             id,
    //                             name,
    //                             image: sprites.other.dream_world.front_default,
    //                             life: stats[0].base_stat,
    //                             attack: stats[1].base_stat,
    //                             defense: stats[2].base_stat,
    //                             velocity: stats[5].base_stat,
    //                             height,
    //                             weight,
    //                         }
    //                     })
    //             } else {

    //             }

    //         })))
    // } else {
    //     throw new Error("Coloca un nombre")
    // }
};

module.exports = getPokemonByName;



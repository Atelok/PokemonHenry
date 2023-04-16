import { GET_ALL_POKEMONS, GET_POKEMON_ID, SET_PAGE, SEE_IMAGE, ORDER_POKEMONS, FILTER_POKEMONS, TYPES_POKEMON, FILTER_ATAQUE, OURS_YOURS_POKEMONS, SEARCH_BY_NAME } from "./TypeActions"
import axios from "axios"



const getAllPokemons = ()=>{

    return async function (dispatch) {
        const json= await axios.get("http://localhost:3001/pokemons/");
        const pokemon = json.data
        
        return dispatch({type:GET_ALL_POKEMONS, payload: pokemon});
    }
};


const getPokemonId = (id)=>{

    return async function (dispatch) {
        const json= await axios.get(`http://localhost:3001/pokemons/${id}`);
        const pokemon = json.data
        
        return dispatch({type:GET_POKEMON_ID, payload: pokemon});
    }
};


//TIPOS POKEMON
const getTypes = ()=>{

    return async function(dispatch){
        const json = await axios.get("http://localhost:3001/types/")
        const types = json.data
        return dispatch({type: TYPES_POKEMON, payload: types})
    }
};

//PASAR DE PAGINA
const setCurrentPage = (info)=>{
    return { type: SET_PAGE, payload: info}
};

//VER A MEW
const seeImage = ()=>{
    return { type: SEE_IMAGE, payload: true}
};

// VER ORDENADOS 
const orderPokemons = (AscDesc)=> {
    return {type: ORDER_POKEMONS, payload: AscDesc}
};

// FILTRAR POKEMON POR TIPO, EN typesPokemon VIENE EL TIPO
const filterPokemon = (typesPokemon)=>{
        return {type: FILTER_POKEMONS, payload: typesPokemon}
    
}


//FILTRADO POR ATAQUE
const filterAtaque = (ataque)=>{
    return {type: FILTER_ATAQUE, payload: ataque}
}


//FILTRADO PARA LOS POKEMONS DE LA API Y LOS CREADOS
const ourPokemons = (pokemon)=>{
    return {type: OURS_YOURS_POKEMONS, payload: pokemon}
}

const searchName = (name)=>{

    return async function(dispatch){
        const json = await axios.get(`http://localhost:3001/pokemons/name?name=${name}`)
        const pokemon = json.data
        return dispatch({type: SEARCH_BY_NAME, payload: pokemon})
    }
}




export {
    getAllPokemons,
    getPokemonId,
    setCurrentPage,
    seeImage,
    orderPokemons,
    filterPokemon,
    getTypes,
    filterAtaque,
    ourPokemons,
    searchName
}
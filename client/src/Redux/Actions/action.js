import { GET_ALL_POKEMONS, GET_POKEMON_ID, SET_PAGE, SEE_IMAGE, ORDER_POKEMONS, FILTER_POKEMONS, TYPES_POKEMON } from "./TypeActions"
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




export {
    getAllPokemons,
    getPokemonId,
    setCurrentPage,
    seeImage,
    orderPokemons,
    filterPokemon,
    getTypes
}
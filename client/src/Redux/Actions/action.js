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


//! NO RETORNA BIEN LA INFORMACION DE TYPES
const getTypes = ()=>{

    return async function(dispatch){
        const json = await axios.get("http://localhost:3001/types/")
        const types = json.data
        return dispatch({type: TYPES_POKEMON, payload: types})
    }
};


const setCurrentPage = (info)=>{
    return { type: SET_PAGE, payload: info}
};


const seeImage = ()=>{
    return { type: SEE_IMAGE, payload: true}
};


const orderPokemons = (AscDesc)=> {

    return {type: ORDER_POKEMONS, payload: AscDesc}
};






const filterPokemon = (typesPokemon)=>{

    return async function(){
        const json = await axios.get("http://localhost:3001/types")
        const type = json.data
        return {type: FILTER_POKEMONS, payload: type}
    }
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
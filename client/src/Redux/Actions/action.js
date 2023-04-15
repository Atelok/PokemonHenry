import { GET_ALL_POKEMONS, GET_POKEMON_ID, SET_PAGE } from "./TypeActions"
import axios from "axios"







const getAllPokemons = ()=>{

    return async function (dispatch) {
        const json= await axios.get("http://localhost:3001/pokemons/");
        const pokemon = json.data
        
        return dispatch({type:GET_ALL_POKEMONS, payload: pokemon});
    } ;
};


const getPokemonId = (id)=>{

    return async function (dispatch) {
        const json= await axios.get(`http://localhost:3001/pokemons/${id}`);
        const pokemon = json.data
        return dispatch({type:GET_POKEMON_ID, payload: pokemon});
    } ;
};

const setCurrentPage = (info)=>{
    return { type: SET_PAGE, payload: info}
}





export {
    getAllPokemons,
    getPokemonId,
    setCurrentPage
}
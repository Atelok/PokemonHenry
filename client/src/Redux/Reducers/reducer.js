import { GET_ALL_POKEMONS, GET_POKEMON_ID, SET_PAGE, SEE_IMAGE } from "../Actions/TypeActions"




const initialState = {
    allPokemon: [],
    currentPage: 0,
    pokemonsPerPage:12,
    seeMewImage: false
    
}


const rootReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_ALL_POKEMONS:
            return { ...state, allPokemon: action.payload};

        case GET_POKEMON_ID:
            return { ...state, allPokemon: action.payload};

        case SET_PAGE:
            return { ...state, currentPage: action.payload};

        case SEE_IMAGE:
            return {...state, seeMewImage: action.payload }

        default:
            return { ...state }
    }


}

export default rootReducer
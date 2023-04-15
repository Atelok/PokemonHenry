import { GET_ALL_POKEMONS, GET_POKEMON_ID, SET_PAGE, SEE_IMAGE, ORDER_POKEMONS, FILTER_POKEMONS, TYPES_POKEMON } from "../Actions/TypeActions"




const initialState = {
    allPokemon: [],
    filterPokemon: [],
    currentPage: 0,
    pokemonsPerPage:12,
    seeMewImage: false,
    typesPokemon: []
}


const rootReducer = (state = initialState, action) => {

    switch (action.type) {

        case GET_ALL_POKEMONS:
            return { ...state, allPokemon: action.payload , filterPokemon: action.payload};

        case GET_POKEMON_ID:
            return { ...state, allPokemon: action.payload};

        case SET_PAGE:
            return { ...state, currentPage: action.payload};

        case SEE_IMAGE:
            return {...state, seeMewImage: action.payload };

        case ORDER_POKEMONS:
            if (action.payload === "refreshAll") {
                return {...state, allPokemon: [...state.filterPokemon.sort((a, b)=> a.id - b.id)]}
            }
            const order = action.payload === "Ascendente"? [...state.allPokemon.sort((a, b)=> a.name.localeCompare(b.name))]: [...state.allPokemon.sort((a, b)=> b.name.localeCompare(a.name))]
            return {...state, allPokemon: order};
        
        case TYPES_POKEMON:
            return {...state, typesPokemon: action.payload };


        default:
            return { ...state }
    }


}


export default rootReducer
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
console.log(state.filterPokemon.filter((typ)=>typ.types===action.payload));
    switch (action.type) {
        //OBTENER POKEMON
        case GET_ALL_POKEMONS:
            return { ...state, allPokemon: action.payload , filterPokemon: action.payload};
        //OBTENET POKEMON POR ID
        case GET_POKEMON_ID:
            return { ...state, allPokemon: action.payload};

        //PAGINADO
        case SET_PAGE:
            return { ...state, currentPage: action.payload};

        //IMAGEN MEW
        case SEE_IMAGE:
            return {...state, seeMewImage: action.payload };

        //ORDENAR POKEMON DE A-Z / Z-A / REFRESCAR TODO
        case ORDER_POKEMONS:
            if (action.payload === "refreshAll") {
                return {...state, allPokemon: [...state.filterPokemon.sort((a, b)=> a.id - b.id)]}
            }
            const order = action.payload === "Ascendente"? [...state.allPokemon.sort((a, b)=> a.name.localeCompare(b.name))]: [...state.allPokemon.sort((a, b)=> b.name.localeCompare(a.name))]
            return {...state, allPokemon: order};
        
        // PARA PONER LOS TIPOS POKEMONS EN EL GLOBAL
        case TYPES_POKEMON:
            return {...state, typesPokemon: action.payload };
        
        //FILTRAR POR TIPOS
        case FILTER_POKEMONS:
        const sameType = state.filterPokemon.filter((typ)=>typ.types[0]===action.payload || typ.types[1]===action.payload)
        return {...state, allPokemon: sameType }


        default:
            return { ...state }
    }



}




export default rootReducer
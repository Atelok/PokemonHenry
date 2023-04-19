import { GET_ALL_POKEMONS, GET_POKEMON_ID, SET_PAGE, SEE_IMAGE, ORDER_POKEMONS, FILTER_POKEMONS, TYPES_POKEMON, FILTER_ATAQUE, OURS_YOURS_POKEMONS, SEARCH_BY_NAME, GET_POKEMON_ID2, NOMBRE_POKEMASTER } from "../Actions/TypeActions"




const initialState = {
    allPokemon: [],
    filterPokemon: [],
    currentPage: 0,
    pokemonsPerPage:12,
    seeMewImage: false,
    typesPokemon: [],
    pokemonId: {},
    namePokemaster: ""
}


const rootReducer = (state = initialState, action) => {

    switch (action.type) {
        
        //OBTENER POKEMON
        case GET_ALL_POKEMONS:
            return { ...state, allPokemon: action.payload , filterPokemon: action.payload};

        
        //OBTENET POKEMON POR ID
        case GET_POKEMON_ID:
            return { ...state, allPokemon: [action.payload]};

        
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
        const sameType = state.filterPokemon.filter((typ)=>typ.Types[0]===action.payload || typ.Types[1]===action.payload)
            return {...state, allPokemon: sameType };


        //FILTRAR POR ATAQUE
        case FILTER_ATAQUE:
        const filtAttack = action.payload === "mayorAtaque"? [...state.allPokemon.sort((a, b)=>b.attack-a.attack)] : [...state.allPokemon.sort((a, b)=>a.attack-b.attack)]  
            return {...state, allPokemon: filtAttack}


        //FILTRAR POR PERTENENCIA DE POKEMONS
        case OURS_YOURS_POKEMONS:
        const whoIsIt = action.payload === "Mypokemons" ?  [...state.filterPokemon.filter((pokemon)=> pokemon.create === false)] : [...state.filterPokemon.filter((pokemon)=> pokemon.create === true)]  
        
            return {...state, allPokemon: whoIsIt}


        //BUSQUEDA POR NOMBRE
        case SEARCH_BY_NAME:
            return {...state, allPokemon: [action.payload]}


        //PARA EJECUCION DE LOS DETAILS
        case GET_POKEMON_ID2:
            return { ...state, pokemonId: {...action.payload}};

        
        //
        case NOMBRE_POKEMASTER:
            return {...state, namePokemaster: action.payload }

            
        default:
            return { ...state }
    }
}




export default rootReducer


    // para filtrado, posible solucion
   // const pokeType =[];

            // if (Array.isArray(poke.types)) {
                
            //     if (poke.types[0] === action.payload || poke.types[1] === action.payload) {
            //         pokeType.push(poke)
            //     }
                
            // }else{
            //     if (poke.Types[0].name===action.payload || poke.Types[1].name===action.payload) {
            //         pokeType.push(poke)
            //     }
            // }
            // return pokeType


            /*
            case ORDER_BY_WEIGHT:

                const hola = state.dogs_page.map((uno)=>{

                    return [...uno, weight: [...a.weight.imperial.split('-')] ]
                })
                const hola2 = hola.sort((a, b)=> a.weight.imperial[0] - b.weight.imperial[0]
                const hola3 = hola.sort((a, b)=> b.weight.imperial[0] - a.weight.imperial[0]

                )

                if(action.payload === 'AscName'){

                    return {
                        ...state,
                        dogs_page : [...hola2]
                    }
                } else {
                    return {
                        ...state,
                        dogs_page : [...hola3)

                    }
                }
            
            */
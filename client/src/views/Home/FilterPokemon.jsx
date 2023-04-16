import { useSelector, useDispatch } from "react-redux";
import { filterPokemon, ourPokemons } from "../../Redux/Actions/action";


const FilterPokemons = ()=>{

    const typesPokemon = useSelector((state)=>state.typesPokemon)
    const dispatch = useDispatch();

    const filterPoke = (event)=>{
        const name = event.target.value
        dispatch(filterPokemon(name))
    }

    const ourPokemonsHandler = (event)=>{
        const name = event.target.value
        dispatch(ourPokemons(name))
    }

    return(
        <div>
            <label htmlFor="">Filter types: </label>
            <select name="order"  onChange={filterPoke}>
                <option value="Filter" disabled="disabled">Filter By</option>
                {typesPokemon.map((types, index)=>{
                    return(
                        <option key={index} value={types}>{types}</option>
                    )
                })}

            </select>
            <hr />

            <label htmlFor="">Filter creados: </label>
            <select name="order" onChange={ourPokemonsHandler}>
            <option value="Filter" disabled="disabled">Choose By</option>
                <option value="Mypokemons">My Pokemons</option>
                <option value="Yourpokemons">Your Pokemons</option>
            </select>

        </div>
    )

}

export default FilterPokemons
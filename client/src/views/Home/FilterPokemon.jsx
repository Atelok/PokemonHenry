import { useSelector, useDispatch } from "react-redux";
import { filterPokemon } from "../../Redux/Actions/action";


const FilterPokemons = ()=>{

    const typesPokemon = useSelector((state)=>state.typesPokemon)
    const dispatch = useDispatch();

    const filterPoke = (event)=>{
        const name = event.target.value
        dispatch(filterPokemon(name))
    }


    return(
        <div>
            <label htmlFor="">Filter types: </label>
            <select name="order" id="" onChange={filterPoke}>
                <option value="Filter" disabled="disabled">Filter By</option>
                {typesPokemon.map((types, index)=>{
                    return(
                        <option key={index} value={types}>{types}</option>
                    )
                })}

            </select>

        </div>
    )

}

export default FilterPokemons
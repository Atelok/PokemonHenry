import { useSelector } from "react-redux";



const FilterPokemons = ()=>{

    const typesPokemon = useSelector((state)=>state.typesPokemon)


    return(
        <div>
            <select name="" id="">
                <option value="Filter" disabled="disabled">Filter By</option>
                {typesPokemon.map((types, index)=>{
                    return(
                        <option key={index} value="">{types}</option>
                    )
                })}

            </select>

        </div>
    )

}

export default FilterPokemons
import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"



const SearchBar = ()=>{

    const onePoke = useSelector((poke)=> poke.allPokemon)


const id = ""

const getPokemonHandler = (event)=>{

}

    return(
        <div>
            <div>
                <button>Random</button>

                <input type="text" value=""/>

                <button onClick={getPokemonHandler}>Search</button>


            </div>

        </div>

    )

}

export default SearchBar


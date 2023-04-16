import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchName, getPokemonId } from "../../Redux/Actions/action";

const SearchBar = () => {
  // const onePoke = useSelector((poke) => poke.allPokemon);
  const dispatch = useDispatch();


  const [name, setName] = useState("")



  //MI HANDLE PARA SOBREESCRIBIR EL ESTADO LOCAL ID
  function handleChange(events) {
    setName(events.target.value)
}


// MI HANDLE PARA HACER DISPATCH DE MI ACTION FUNCION CON EL "ID"
  const getPokemonHandler = () => {

    dispatch(searchName(name))
  };


//MI HANDLE PARA RANDOMEAR POKEMONS
  const getRandomPokemon = ()=>{
    const random = Math.floor(Math.random()*1010)
    console.log(random);
    dispatch(getPokemonId(random))
  }



  return (
    <div>
      <div>
        <button onClick={getRandomPokemon}>Random</button>

        <input type="text" value={name} onChange={handleChange}/>

        <button onClick={getPokemonHandler}>Search</button>
      </div>
    </div>
  );
};

export default SearchBar;

import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchName } from "../../Redux/Actions/action";

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


  



  return (
    <div>
      <div>
        <button >Random</button>

        <input type="text" value={name} onChange={handleChange}/>

        <button onClick={getPokemonHandler}>Search</button>
      </div>
    </div>
  );
};

export default SearchBar;

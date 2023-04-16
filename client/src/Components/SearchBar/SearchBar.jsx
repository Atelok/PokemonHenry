import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchName } from "../../Redux/Actions/action";

const SearchBar = () => {
  // const onePoke = useSelector((poke) => poke.allPokemon);
  const dispatch = useDispatch();


  const [id, setId] = useState("")


  function handleChange(events) {
    setId(events.target.value)
}



  const getPokemonHandler = () => {

    dispatch(searchName(id))
  };





  return (
    <div>
      <div>
        <button>Random</button>

        <input type="text" value={id} onChange={handleChange}/>

        <button onClick={getPokemonHandler}>Search</button>
      </div>
    </div>
  );
};

export default SearchBar;

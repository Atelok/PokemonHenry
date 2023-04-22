import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchName, getPokemonId } from "../../Redux/Actions/action";
import style from "./SearchBar.module.css";
import { setCurrentPage } from "../../Redux/Actions/action";

const SearchBar = () => {
  // const onePoke = useSelector((poke) => poke.allPokemon);
  const dispatch = useDispatch();

  const [name, setName] = useState("");

  //MI HANDLE PARA SOBREESCRIBIR EL ESTADO LOCAL ID
  function handleChange(events) {
    setName(events.target.value);
  }

  // MI HANDLE PARA HACER DISPATCH DE MI ACTION FUNCION CON EL "ID"
  const getPokemonHandler = () => {
    dispatch(setCurrentPage(0))
    dispatch(searchName(name));
  };

  //MI HANDLE PARA RANDOMEAR POKEMONS
    
  const getRandomPokemon = () => {

    dispatch(setCurrentPage(0))
    const random = Math.floor(Math.random() * 1010);
    dispatch(getPokemonId(random));
  };

  return (
    <div className={style.SearchBar_Div}>
      <div className={style.SearchBar_Div2}>
        <button className={style.boton_Search} onClick={getRandomPokemon}>Random</button>

        <div className={style["wave-group"]}>
          <input
            required
            type="text"
            className={style.input}
            value={name}
            onChange={handleChange}
          />
          <span className={style.bar}></span>
          <label className={style.label}> 
            <span className={style["label-char"]} style={{ "--index": 0 }}>
              P
            </span>
            <span className={style["label-char"]} style={{ "--index": 1 }}>
              o
            </span>
            <span className={style["label-char"]} style={{ "--index": 2 }}>
              k
            </span>
            <span className={style["label-char"]} style={{ "--index": 3 }}>
              é
            </span>
            <span className={style["label-char"]} style={{ "--index": 4 }}>
              m
            </span>
            <span className={style["label-char"]} style={{ "--index": 5 }}>
              o
            </span>
            <span className={style["label-char"]} style={{ "--index": 6 }}>
              n
            </span>
          </label>
        </div>
        
        <button onClick={getPokemonHandler} className={style.boton_Search}>Search</button>
      </div>
    </div>
  );
};

export default SearchBar;

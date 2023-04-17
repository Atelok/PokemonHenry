import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  getAllPokemons,
  setCurrentPage,
  getTypes,
  orderPokemons
} from "../../Redux/Actions/action.js";
import PokemonList from "./PokemonList.jsx";
import style from "./Home.module.css";
import OrderPokemon from "./OrderPokemon.jsx";
import FilterPokemons from "./FilterPokemon.jsx";

const Home = () => {
  const dispatch = useDispatch();

  //!ESTADO GLOBAL - PASAREMOS POR AQUI PORQUE QUIZAS LO USEMOS MAS ADELANTE
  const allPokemon = useSelector((state) => state.allPokemon);

  useEffect(() => {
    try {
      dispatch(getAllPokemons());
      dispatch(getTypes());
    } catch (error) {
      throw Error("Algo salio mal");
    }
  }, [dispatch]);

    const filterHandler = (event) => {
        const AscDesc = event.target.name
        dispatch(orderPokemons(AscDesc))
    }

  const handlePageChange = (newPage) => {
    dispatch(setCurrentPage(newPage));
  };

  return (
    <div className={style.PokemonList}>
      <div className={style.IzquierdaFilterOrder}>
        <div >
          <button name="refreshAll" onClick={filterHandler}>
            REFRESH
          </button>
        </div>

        <FilterPokemons />
        <OrderPokemon />
      </div>
      <PokemonList allPokemon={allPokemon} onPageChange={handlePageChange} />
    </div>
  );
};
export default Home;

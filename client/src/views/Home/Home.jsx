import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  getAllPokemons,
  setCurrentPage,
  getTypes,
  orderPokemons,
} from "../../Redux/Actions/action.js";
import PokemonList from "./PokemonList.jsx";
import style from "./Home.module.css";
import imagePoke from "./img/pokemon-maplerose.webp"


const Home = () => {
  const dispatch = useDispatch();

  //ESTADO GLOBAL - PASAREMOS POR AQUI PORQUE QUIZAS LO USEMOS MAS ADELANTE
  const allPokemon = useSelector((state) => state.allPokemon);

  useEffect(() => {
    try {
      dispatch(getAllPokemons());
      dispatch(getTypes());
      document.documentElement.style.backgroundImage = `url(${imagePoke})`;
      // document.documentElement.style.backgroundSize = 'cover';
    } catch (error) {
      throw Error("Algo salio mal");
    }

  }, [dispatch]);

  const filterHandler = (event) => {
    const AscDesc = event.target.name;
    dispatch(orderPokemons(AscDesc));
  };

  const handlePageChange = (newPage) => {
    dispatch(setCurrentPage(newPage));
  };

  const namePokemaster = useSelector((state)=>state.namePokemaster)
  return (
    <div className={style.PokemonList}>


      <div className={style.IzquierdaFilterOrder}>
        <div className={style.imagen}></div>
      <div className={style.hola_de_nuevo}>

        <h2>
          Hola {`"${namePokemaster.toUpperCase()}"`}, aqui explorarás el mundo de Pokémon.
        </h2>
          <p>No importa si eres nuevo en la serie o si eres un experimentado entrenador Pokémon, hay un montón de Pokémons increíbles por descubrir.</p>

      </div>


        

      </div>



      <div className={style.div_hola}>
      <PokemonList allPokemon={allPokemon} onPageChange={handlePageChange} filterHandler={filterHandler} />
      </div>


    </div>
  );
};
export default Home;

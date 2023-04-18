import Cards from "../../Components/Cards/Cards.jsx";
import style from "./Home.module.css";
import { useSelector } from "react-redux";
import NumberList from "./numberList.jsx";


const PokemonList = ({ allPokemon, onPageChange }) => {
  const currentPage = useSelector((state) => state.currentPage);
  const pokemonsPerPage = useSelector((state) => state.pokemonsPerPage);
  // const allPokemon = useSelector ((state)=> state.allPokemon)


  // AQUI VERIFICAMOS EL INICIO Y FINAL DEL SLICE
  const start = currentPage * pokemonsPerPage;
  const end = start + pokemonsPerPage;
  const pageQuantity = Math.ceil(allPokemon.length / pokemonsPerPage)

  const pokemonsToShow = allPokemon.slice(start, end);
  
  // FUNCIONES PARA AUMENTAR Y DISMINUIR EL ESTADO GLOBAL (CURRENT PAGE) PAGINA ACTUAL
  const handleNextPage = () => {
    onPageChange(currentPage + 1);
  };
  const handlePrevPage = () => {
    onPageChange(currentPage - 1);
  };

  //FUNCION PARA TOTAL DE PAGINADO
  
  // const totalPaginado = ()=>{


  // }




  const namePokemaster = useSelector((state)=>state.namePokemaster)

  return (
    <div className={style.div_hola}>
      <div className={style.div_botones}>
        <button onClick={handlePrevPage} disabled={currentPage === 0}>
          PREVIOUS
        </button>
        <NumberList pageQuantity={pageQuantity} onPageChange={onPageChange} />
        <button onClick={handleNextPage} disabled={end > allPokemon.length - 1}>
          NEXT
        </button>
      </div>

      <div className={style.hola_de_nuevo}>Hola de nuevo {namePokemaster}</div>
      <Cards pokemonsToShow={pokemonsToShow} />
    </div>
  );
};

export default PokemonList;

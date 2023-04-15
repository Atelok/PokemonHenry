import Cards from "../../Components/Cards/Cards.jsx";
import style from "./Home.module.css";
import { useSelector } from "react-redux";
import OrderPokemon from "./OrderPokemon.jsx";
import FilterPokemons from "./FilterPokemon.jsx";

const PokemonList = ({ allPokemon, onPageChange }) => {

    const currentPage = useSelector((state)=>state.currentPage)
    const pokemonsPerPage = useSelector((state)=>state.pokemonsPerPage)
    

    // AQUI VERIFICAMOS EL INICIO Y FINAL DEL SLICE
    const start = currentPage * pokemonsPerPage;
    const end = start + pokemonsPerPage;

    const pokemonsToShow = allPokemon.slice(start, end);


    // FUNCIONES PARA AUMENTAR Y DISMINUIR EL ESTADO GLOBAL CURRENT PAGE
    const handleNextPage = () => {
        onPageChange(currentPage + 1);
    };
    const handlePrevPage = () => {
        onPageChange(currentPage - 1);
    };


    return (
        <div className={style.div_hola}>
            <button onClick={handlePrevPage} disabled={currentPage === 0}>
                PREVIOUS
            </button>
            <button
                onClick={handleNextPage}
                disabled={end > allPokemon.length-1}
            >
                NEXT
            </button>
            <OrderPokemon/>
            <FilterPokemons/>

            <div className={style.hola_de_nuevo}>Hola de nuevo</div>
            <Cards pokemonsToShow={pokemonsToShow} />
        </div>
    );
};

export default PokemonList;

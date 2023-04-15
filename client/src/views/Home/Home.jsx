import Cards from "../../Components/Cards/Cards.jsx"
import style from "./Home.module.css"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getAllPokemons, setCurrentPage } from "../../Redux/Actions/action.js"



const Home = () => {

    const dispatch = useDispatch();

    const { allPokemon, currentPage, pokemonsPerPage } = useSelector((state) => ({
        allPokemon: state.allPokemon,
        currentPage: state.currentPage,
        pokemonsPerPage: state.pokemonsPerPage
    }));

    // definir inicio y final para el slice
    const start = currentPage * pokemonsPerPage;
    const end = start + pokemonsPerPage;
    console.log(currentPage);

    // slice en el array de estado global
    const pokemonsToShow = allPokemon.slice(start, end)
    console.log(pokemonsToShow);

    useEffect(() => {
        dispatch(getAllPokemons())
    }, [])


    const handleNextPage = () => {
        dispatch(setCurrentPage(currentPage + 1))
    };

    const handlePrevPage = () => {
        dispatch(setCurrentPage(currentPage - 1));
    }



    return (
        <div className={style.div_hola}>
            <button onClick={handlePrevPage} disabled={currentPage === 0}>PREVIOUS</button>
            <button onClick={handleNextPage} disabled={end >= allPokemon.length - 1}>NEXT</button>
            <div className={style.hola_de_nuevo}>Hola de nuevo</div>
            <Cards  pokemonsToShow={pokemonsToShow}/>

        </div>
    )
}
export default Home
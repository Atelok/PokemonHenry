import Cards from "../../Components/Cards/Cards.jsx";
import style from "./Home.module.css";
import { useSelector } from "react-redux";
import NumberList from "./numberList.jsx";
import OrderPokemon from "./OrderPokemon.jsx";
import FilterPokemons from "./FilterPokemon.jsx";
import { useEffect } from "react";


const PokemonList = ({ allPokemon, onPageChange, filterHandler }) => {
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



  // useEffect(() => {
  //   first
  
  //   return () => {
  //     second
  //   }
  // }, [third])
  



  

  return (
    <div className={style.div_PokemonList}>
      <div className={style.div_botones}>
        <button className={currentPage === 0? style.boton_prev2 : style.boton_prev}  onClick={handlePrevPage} disabled={currentPage === 0}>
          PREVIOUS
        </button>
        <NumberList pageQuantity={pageQuantity} onPageChange={onPageChange} />
        <button className={currentPage === pageQuantity-1? style.boton_next2 : style.boton_next} onClick={handleNextPage} disabled={end > allPokemon.length - 1}>
          NEXT
        </button>
      </div>


      <div className={style.Pokemonlist_hola_refresh}>
        <div className={style.Filterpoke_OrderPoke}>

          <div>
            <FilterPokemons />
          </div>

        
          <div>
            <OrderPokemon />
          </div>
        </div>


        <div className={style.div_boton_refresh}>
          <button name="refreshAll" onClick={filterHandler}>
            REFRESH
          </button>
        </div>

      </div>



      <div className={style.cards_imagen}>
        {/* <div style={{width : "0px", paddingLeft: "0px"}}>
          aqui va a ir una imagen
        </div> */}

        <div>
          <Cards pokemonsToShow={pokemonsToShow} />
        </div>

        {/* <div style={{width : "0px", paddingRight: "0px"}}>
          aqui va a ir una imagen
        </div> */}
      </div>

    </div>
  );
};

export default PokemonList;

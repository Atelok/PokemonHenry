import { useDispatch } from "react-redux"
import { orderPokemons, filterAtaque } from "../../Redux/Actions/action";
import style from "./Home.module.css"
const OrderPokemon = () => {

    const dispatch = useDispatch();

    const filterHandler = (event) => {
        const AscDesc = event.target.name
        dispatch(orderPokemons(AscDesc))
    }

    const filterAtaqueHandler = (event)=>{
        const ataque = event.target.name
        dispatch(filterAtaque(ataque))
    }

    return (
        <div className={style.orderPokemon}>

            <div className={style.ordenar_Asc_Desc}>
                Ordenar por: 
                <button name="Ascendente" onClick={filterHandler}>A-Z</button>
                <button name="Descendente" onClick={filterHandler}>Z-A</button>
            </div>

            <div>
                Ordenar por Ataque:
                <button name="menorAtaque" onClick={filterAtaqueHandler}>MENOR ATAQUE</button>
                <button name="mayorAtaque" onClick={filterAtaqueHandler}>MAYOR ATAQUE</button>
            </div>


        </div>
    )

}

export default OrderPokemon
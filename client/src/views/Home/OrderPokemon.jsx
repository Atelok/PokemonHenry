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
                Ordenar por Nombre: 
                <div style={{paddingLeft: "20px"}}>
                <button name="Ascendente" onClick={filterHandler} className={style.div_button_order}>A-Z</button>
                <button name="Descendente" onClick={filterHandler} className={style.div_button_order}>Z-A</button>
                </div>
            </div>

            <div>
                Ordenar por Ataque:
                <div style={{paddingTop : "10px"}}>
                <button name="menorAtaque" onClick={filterAtaqueHandler} className={style.div_button_order}>MENOR ATAQUE</button>
                <button name="mayorAtaque" onClick={filterAtaqueHandler} className={style.div_button_order}>MAYOR ATAQUE</button>
                </div>
            </div>


        </div>
    )

}

export default OrderPokemon
import { useDispatch } from "react-redux"
import { orderPokemons } from "../../Redux/Actions/action";

const OrderPokemon = () => {

    const dispatch = useDispatch();

    const filterHandler = (event) => {
        const AscDesc = event.target.name
        dispatch(orderPokemons(AscDesc))
    }



    return (
        <div>
            <div><button name="refreshAll" onClick={filterHandler}>REFRESH</button></div>

            <div>
                <button name="Ascendente" onClick={filterHandler}>A-Z</button>
                <button name="Descendente" onClick={filterHandler}>Z-A</button>
            </div>

        </div>
    )

}

export default OrderPokemon
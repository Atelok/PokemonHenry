
import Card from "../Card/Card";
import style from "./Cards.module.css"

const Cards = ({pokemonsToShow})=>{



    return(
        <div className={style.div_general}>
            <div><button>refresh</button></div>
        <div className={style.justi_div}>
            { pokemonsToShow.map((poke)=>{
                const {id, name, image, types, Types} = poke

                return(
                    <div className={style.cada_div}>
                        <Card id={id} name={name} image={image} types={types} Types={Types}/>
                    </div>
                )
            })}
        </div>
        </div>
    )
}

export default Cards
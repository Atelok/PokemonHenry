
import Card from "../Card/Card";
import style from "./Cards.module.css"

const Cards = ({pokemonsToShow})=>{



    return(
        <div className={style.div_general}>

        <div className={style.justi_div}>
            { pokemonsToShow.map((poke, index)=>{
                const {id, name, image, Types} = poke

                return(
                    <div className={style.cada_div} key={index}>
                        <Card id={id} name={name} image={image} Types={Types}/>
                    </div>
                )
            })}
        </div>
        </div>
    )
}

export default Cards
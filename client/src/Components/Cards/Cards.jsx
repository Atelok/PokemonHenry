
import Card from "../Card/Card";
import style from "./Cards.module.css"
import Pokebola from "../../extras/loaderPokebola";

const Cards = ({pokemonsToShow})=>{



    return(
        <>
        {pokemonsToShow? (<div className={style.div_general}>

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
</div>): <Pokebola/>}
        


        </>
    )
}

export default Cards
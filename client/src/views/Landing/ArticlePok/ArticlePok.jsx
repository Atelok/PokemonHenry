import Pikachu from "../img/pikachu-poke.png"
import Esfera from "../img/Esfera-pokemon3.png"
import style from "./ArticlePok.module.css"

const Article = () => {

return(
    
        <div className={style.article}>
            <img className={style.first_child} src={Esfera} alt="Pokebola" />
            <img className={style.last_child} src={Pikachu} alt="Pikachu" />
        </div>

)

}

export default Article
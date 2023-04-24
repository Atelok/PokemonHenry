import style from "./Card.module.css";
import { NavLink } from "react-router-dom";
import sparkles from "./img/sparkles.gif"
import fondito from "./img/holo.png"
import banner from "./img/banner-dorado.png"
import Pokebola from "../../extras/loaderPokebola"


const Card = ({ id, name, image, Types, verify }) => {


const nameCorrectly = name.charAt(0).toUpperCase() + name.slice(1)

  

  return (
    <>
      {verify && image && name? (<div className={`${Types[0]} ${style.div_general_card}`}>
        <NavLink className={style.NavLink_Card} to={`/detail/${id}`}>
          <div className={style.rango_Detail}>
            <div >
            {/* IMAGEN DE LA CARD */}
            <div className={`${Types[0]} ${style.div_img_pokemon}`}>
              
            <img className={style.banner}  src={banner} alt="banner" />  
            <img className={style.sparkles_imagenGif} src={sparkles} alt="sparkles" />
            <img className={style.fondito} src={fondito} alt="fondito" />
              




              <div className={`${Types[0]} ${style.circle}`}>
              <img
                className={style.img_pokemon}
                src={image}
                alt={`Pokemons ${name}`
              }
              />
              </div>

            </div>
            {/* #ID O #CREATED */}
            {isNaN(id) ? <div className={style.id_Poke}># Created </div> : <div className={style.id_Poke}> # {id} </div>}
            </div>

            {/* NOMBRE DEL POKE */}
            <div>
              <h4 className={style.name}>{nameCorrectly}</h4>
            </div>

            {/* H4 DE TYPES */}
            <div className={style.nameCard}>
              <h4 className={style.Types}>Types:</h4>
            </div>

            {/* LOS TIPOS DE POKEMON */}
            <div className={style.div_types}>
              {/* AQUI VA LA VERIFICACION DE types y Types */}
              {Types.map((tipo)=> <div className={`${tipo} ${style.tipos}`}>{tipo}</div> )}
            </div>
          </div>
        </NavLink>
      </div>) : <Pokebola/>}
      
    </>
  );
};

export default Card;

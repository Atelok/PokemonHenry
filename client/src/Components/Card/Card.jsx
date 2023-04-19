import style from "./Card.module.css";
import { NavLink } from "react-router-dom";

const Card = ({ id, name, image, Types }) => {
  return (
    <>
      <div className={style.div_general_card}>
        <NavLink className={style.NavLink_Card} to={`/detail/${id}`}>
          <div className={style.rango_Detail}>

            <div >
            {/* IMAGEN DE LA CARD */}
            <div className={style.div_img_pokemon}>
              <img
                className={style.img_pokemon}
                src={image}
                alt={`Pokemons ${name}`}
              />
            </div>
            {/* #ID O #CREATED */}
            {isNaN(id) ? <div># Created </div> : <div> # {id} </div>}
            </div>

            {/* NOMBRE DEL POKE */}
            <div>
              <h4>{name}</h4>
            </div>

            {/* H4 DE TYPES */}
            <div className={style.nameCard}>
              <h4>Types:</h4>
            </div>

            {/* LOS TIPOS DE POKEMON */}
            <div className={style.div_types}>
              {/* AQUI VA LA VERIFICACION DE types y Types */}
              {typeof Types[0] === "string" ? (
                <>
                  <div>{Types[0]}</div>
                  <div>{Types[1]}</div>
                </>
              ) : (
                ""
              )}
            </div>
          </div>
        </NavLink>
      </div>
    </>
  );
};

export default Card;

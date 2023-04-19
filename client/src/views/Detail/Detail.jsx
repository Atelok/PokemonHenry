import { useDispatch, useSelector } from "react-redux";
import { getPokemonId2 } from "../../Redux/Actions/action";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import style from "./Details.module.css";

const Detail = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemonId2(id));
  }, []);

  const pokemonIds = useSelector((state) => state.pokemonId);

  const {
    name,
    image,
    life,
    attack,
    defense,
    velocity,
    height,
    weight,
    Types,
  } = pokemonIds;

  return (
    <div className={style.div_general_detail}>
      <div style={{color:"white", fontSize: "40px", display: "flex", alignItems:"end"}}>
        <h3>{name}</h3>
      </div>
      {name ? (
        <div className={style.Detail_div}>
          <div>
            <img src={image} alt={name} />
          </div>

          <div className={style.name_caracteristicas}>
            <div className={style.Div_caracteristicas}>
              <div className={style.part_caracteristicas}>
                <div className={style.div_caract}>
                  <span className={style.div_caract_span}>Life: </span>
                  <span>{life}</span>
                </div>
                <div className={style.div_caract}>
                  <span className={style.div_caract_span}>Ataque: </span>
                  <span>{attack}</span>
                </div>
                <div className={style.div_caract}>
                  <span className={style.div_caract_span}>Defense: </span>
                  <span>{defense}</span>
                </div>
              </div>

              <div className={style.part_caracteristicas}>
                <div className={style.div_caract}>
                  <span className={style.div_caract_span}>Velocity: </span>
                  <span>{velocity}</span>
                </div>
                <div className={style.div_caract}>
                  <span className={style.div_caract_span}>Height: </span>
                  <span>{height} mts.</span>
                </div>
                <div className={style.div_caract}>
                  <span className={style.div_caract_span}>Weight: </span>
                  <span>{weight} kgs.</span>
                </div>
              </div>

              <div className={style.part_caracteristicas}>
                <div className={style.div_caract}>
                  <span className={style.div_caract_span}>Types: </span>
                  <div>
                    1{")"}
                    {Types[0]}
                  </div>
                  <div>{Types[1]}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        "loading"
      )}
    </div>
  );
};
export default Detail;

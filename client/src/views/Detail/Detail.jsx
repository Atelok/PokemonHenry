import { useDispatch, useSelector } from "react-redux";
import { getPokemonId2 } from "../../Redux/Actions/action";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import style from "./Details.module.css";
import { useNavigate } from "react-router-dom";
import Pokebola from "../../extras/loaderPokebola";

const Detail = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemonId2(id));

    return dispatch(getPokemonId2(""))
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


  const navigate = useNavigate()



  const backToHomeHandler = ()=>{
    navigate("../home")
  }

  if (name) {
    var nameCorrectly = name.charAt(0).toUpperCase() + name.slice(1)
  }


  return (
    <div className={style.div_general_detail}>
      
      {image ? (
        <>
        <div style={{color:"white", fontSize: "40px", display: "flex", alignItems:"end"}}>
        <h3 className={style.nameTitle}>{nameCorrectly}</h3>
      </div>
        <div className={style.Detail_div}>
          <div>
            <img src={image} alt={nameCorrectly} />
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
                    1{") "}
                    {Types[0]}
                  </div>
                  {Types[1] && (<div>
                    2{") "}
                    {Types[1]}</div>)}
                  
                </div>
              </div>
            </div>
          </div>
        </div>
        </>
      ) : (
        <Pokebola/>
      )}

      <div>
        <button onClick={backToHomeHandler}>{"<"} Regresar</button>
      </div>

    </div>
  );
};
export default Detail;

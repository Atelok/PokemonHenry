import { useDispatch, useSelector } from "react-redux";
import { getPokemonId2 } from "../../Redux/Actions/action";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import style from "./Details.module.css";
import { useNavigate } from "react-router-dom";
import Pokebola from "../../extras/loaderPokebola";
import {heart, heightx, running_shoe, shield, sword, weightx} from "./imagenesSVG"


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
            <img className={style.image} src={image} alt={nameCorrectly} />
          </div>

          <div className={style.name_caracteristicas}>
            <div className={style.Div_caracteristicas}>
              <div className={style.part_caracteristicas}>
                <div className={style.div_caract}>
                  <span className={style.div_caract_span}>
                    <img src={heart} alt="heart" style={{width: "20px", height: "20px"}}/> {" "} 
                      Life: </span>
                  <span style={{display:"flex", justifyContent:"center"}}>{life}</span>
                </div>
                <div className={style.div_caract}>
                  <span className={style.div_caract_span}>
                    <img src={sword} alt="sword" style={{width: "20px", height: "20px"}}/>{" "} 
                      Ataque: </span>
                  <span style={{display:"flex", justifyContent:"center"}}>{attack}</span>
                </div>
                <div className={style.div_caract}>
                  <span className={style.div_caract_span}>
                  <img src={shield} alt="shield" style={{width: "20px", height: "20px"}}/>{" "} 
                      Defense: </span>
                  <span style={{display:"flex", justifyContent:"center"}}>{defense}</span>
                </div>
              </div>

              <div className={style.part_caracteristicas}>
                <div className={style.div_caract}>
                  <span className={style.div_caract_span}>
                  <img src={running_shoe} alt="running_shoe" style={{width: "20px", height: "20px"}}/>{" "} 
                      Velocity: </span>
                  <span style={{display:"flex", justifyContent:"center"}}>{velocity}</span>
                </div>
                <div className={style.div_caract}>
                  <span className={style.div_caract_span}>
                  <img src={heightx} alt="height" style={{width: "20px", height: "20px"}}/>{" "} 
                      Height: </span>
                  <span style={{display:"flex", justifyContent:"center"}}>{height} m.</span>
                </div>
                <div className={style.div_caract}>
                  <span className={style.div_caract_span}>
                  <img src={weightx} alt="weight" style={{width: "20px", height: "20px"}}/>  {" "} 
                      Weight: </span>
                  <span style={{display:"flex", justifyContent:"center"}}>{weight} kg.</span>
                </div>
              </div>

              <div className={style.part_caracteristicas}>
                <div className={style.div_caract}>
                  <span className={style.div_caract_span}>Types: </span>
                  <div style={{paddingBottom:"10px"}}>
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

      <div className={style.div_button}>
        <button onClick={backToHomeHandler}>{"<"} Regresar</button>
      </div>

    </div>
  );
};
export default Detail;

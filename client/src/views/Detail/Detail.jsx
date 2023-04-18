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
    <div>
      {name ? (
        <div className={style.Detail_div}>
          <div>
            <img src={image} alt={name} />
          </div>
          <div>
            <div>
              <h3>{name}</h3>
            </div>
            <div>
              <div>
                <span>Life: </span>
                <span>{life}</span>
              </div>
              <div>
                <span>Ataque: </span>
                <span>{attack}</span>
              </div>
              <div>
                <span>Defense: </span>
                <span>{defense}</span>
              </div>
              <div>
                <span>Velocity: </span>
                <span>{velocity}</span>
              </div>
              <div>
                <span>Height: </span>
                <span>{height}</span>
              </div>
              <div>
                <span>Weight: </span>
                <span>{weight}</span>
              </div>
              <div>
                <span>Types: </span>
                <div>
                  {Types[0]}
                </div>
                <div>
                  {Types[1]}
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
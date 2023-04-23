import Card from "../Card/Card";
import style from "./Cards.module.css";
import Pokebola from "../../extras/loaderPokebola";
import { useEffect, useState } from "react";

const Cards = ({ pokemonsToShow }) => {

const [verify, setVerify] =  useState(false)

useEffect(() => {
  setVerify(true)

  return () => {
    setVerify(false)


  }
}, [pokemonsToShow])




  return (
    <>
      {verify && pokemonsToShow? (
        <div className={style.div_general}>
          <div className={style.justi_div}>
            {pokemonsToShow.map((poke, index) => {
              const { id, name, image, Types } = poke;

              return (
                <div className={style.cada_div} key={index}>
                  <Card id={id} name={name} image={image} Types={Types} verify={verify} />
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <Pokebola />
      )}
    </>
  );
};

export default Cards;

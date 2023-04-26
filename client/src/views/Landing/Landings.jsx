import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
// import { Howl } from "howler";
import Article from "./ArticlePok/ArticlePok";
import gotta from "./img/Logo y frase -Pokemon.png";
import mewPoke from "./img/mew-Poke.png";
// import soundFile from "./sound/sonidoPika.mp3";
import { seeImage, obtenerPokeNombre } from "../../Redux/Actions/action";
import style from "./Landing.module.css";


const Landing = () => {
  const navigate = useNavigate();

  // Enviar a /home y reproducir pika
  const toGohandle = () => {
    navigate("/home");
    // const sound = new Howl({
    //   src: [soundFile],
    // });
    // sound.play();
  };


  //CAMBIO DE BACKGROUND


  useEffect(() => {
    document.documentElement.style.background = `linear-gradient(to bottom right, #ed1c24, #fdef08, #3776bc, #55aaff, #55aaff, #3776bc, #fdef08, #ed1c24)`;
    document.documentElement.style.backgroundAttachment = 'fixed';
  }, []);



  //APARECER A MEW

  const seeMewImage = useSelector((state) => state.seeMewImage);
  const dispatch = useDispatch();
  useEffect(() => {
    const temporizador = setTimeout(() => {
      dispatch(seeImage());
    }, 5000);
  }, []);

  //OBTENER NOMBRE DE POKEMASTER

  const verifyName = (event) => {
    const name = event.target.value;
    dispatch(obtenerPokeNombre(name));
  };

  return (
    <header className={style.header_landing}>
      <div className={style.div_superior}>
        <div>

          <label htmlFor="myInput" className={style.label}>
            <span className={style.labelTitle}>Ingresa tu nombre ↑</span>
            <input
              id="myInput"
              className={style.input}
              name="text"
              placeholder="Type your Pokéname here..."
              type="text"
              onChange={verifyName}
            />
          </label>


          {/* <input type="text" onChange={verifyName} /> */}
        </div>

        <div className={style.gotta_div1}>
          <img src={gotta} alt="Pokemon" />
        </div>

        <div className={style.div_principal_landing}>
          <h1 className={style.h1_landing}>Welcome! {">"}</h1>
          <div className={style.boton_landing_to_home}>
            <button onClick={toGohandle}>Enter</button>
          </div>
        </div>

      </div>

      <div className={style.divArticle}>
        <Article />
      </div>

      {/* para mostrar a meow-temporizador */}
      {seeMewImage && (
        <div className={style.div_img_mew}>
          <img className={style.mew} src={mewPoke} alt="" />
        </div>
      )}
    </header>
  );
};

export default Landing;

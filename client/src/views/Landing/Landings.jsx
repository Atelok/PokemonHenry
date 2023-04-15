import { useNavigate } from "react-router-dom"
import style from "./Landing.module.css"
import gotta from "./img/Logo y frase -Pokemon.png"
import Article from "./ArticlePok/ArticlePok"
import { Howl } from "howler"
import soundFile from "./sound/sonidoPika.mp3"




const Landing = () => {


    const navigate = useNavigate()

    // Enviar a /home y reproducir pika    
    const toGohandle = () => {

        navigate("/home")
        const sound = new Howl({
            src: [soundFile],
        });
        sound.play();
    }
    //



    return (
        <header className={style.header_landing}>

            <div className={style.div_superior}>

                <div className={style.gotta_div1}>
                    <img src={gotta} alt="Pokemon" />
                </div>

                <div className={style.div_principal_landing}>
                    <h1 className={style.h1_landing}>
                        MARAVILLATE {">"}
                    </h1>
                    <div className={style.boton_landing_to_home}>
                        <button onClick={toGohandle}>
                            Enter
                        </button>
                    </div>
                </div>
            </div>

            <div className={style.divArticle}>
                <Article />
            </div>

        </header>
    )

}

export default Landing
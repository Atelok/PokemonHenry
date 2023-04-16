import style from "./Card.module.css"

const Card = ({ id, name, image, Types }) => {
    return (
        <div className={style.div_general_card}>
            <div className={style.div_img_pokemon}>
                <img className={style.img_pokemon} src={image} alt={`Pokemons ${name}`} />
            </div>
            <div> # {id} </div>
            <h4> Name : </h4>
            <h3>{name}</h3>

            <br />
            <div className={style.div_types}>
                {/* AQUI VA LA VERIFICACION DE types y Types */}
                {typeof Types[0] === "string" ? (
                    <>
                        <div>{Types[0]}</div>
                        <div>{Types[1]}</div>
                    </>
                ) : (
                    <>
                    <div>{Types[0].name}</div>
                    <div>{Types[1].name}</div>
                    </>
                )
                }


            </div>
        </div>
    )
}

export default Card

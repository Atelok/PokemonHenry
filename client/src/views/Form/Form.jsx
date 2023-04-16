import style from "./Form.module.css"
import { useState } from "react"
import axios from "axios"


const Form = () => {
    
    const [errors, setErrors] = useState({
        name: "",
        image: "",
        life: "",
        attack: "",
        defense: "",
        velocity:"",
        height:"",
        weight:"",
    });
    const [form, setForm] = useState({
        name: "",
        image: "",
        life: "",
        attack: "",
        defense: "",
        velocity:"",
        height:"",
        weight:"",
    });




    function valueInputhandler(event) {

        const property = event.target.name
        const value = event.target.value

        validate({...form, [property]: value })
        setForm({...form, [property]: value })
        
        //validate es la funcion creada abajo para verificar los inputs
    }


    const validate = (form)=>{

        //validacion para name
        if (form.name) /^[a-zA-Z]+$/.test(form.name) ? setErrors({...errors, name: "" }):setErrors({...errors, name: "No esta correcto" });
        else !form.name && setErrors({...errors, name: "Debe introducir un nombre" });
        
        if (form.image) /\.(gif|jpe?g|tiff?|png|webp|bmp)$/i.test(form.image) ? setErrors({...errors, image: "" }):setErrors({...errors, image: "Colocar un Imagen correcta" });
        else !form.image && setErrors({...errors, image: "Debe colocar una imagen" });
        
        if (form.life) /^(?:[1-9][0-9]?|100)$/.test(form.life) ? setErrors({...errors, life: "" }):setErrors({...errors, life: "Solo se acepta números del 1 al 100" });
        else !form.life && setErrors({...errors, life: "Colocar vida" });

        if (form.attack) /^(?:[1-9][0-9]?|100)$/.test(form.attack) ? setErrors({...errors, attack: "" }):setErrors({...errors, attack: "Solo se acepta números del 1 al 100" });
        else !form.attack && setErrors({...errors, attack: "Colocar ataque" });

        if (form.defense) /^(?:[1-9][0-9]?|100)$/.test(form.defense) ? setErrors({...errors, defense: "" }):setErrors({...errors, defense: "Solo se acepta números del 1 al 100" });
        else !form.defense && setErrors({...errors, defense: "Colocar defensa" });
    
    }



    const submitHandler = (event)=> {
        event.preventDefault();
        axios.post("http://localhost:3001/pokemons/", form)
        .then((res)=>alert(res.message))
        .catch((err)=> alert(err))
    }

    return (
        <div className={style.div_generalDelForm}>

            <div>Crearemos nuestro Pokemón</div>

            <form className={style.loquecontieneel_Form} onSubmit={submitHandler}> 
                <div>
                    <label htmlFor="">  Ingresa un nombre*: </label>
                    <input type="text" name="name" value={form.name} onChange={valueInputhandler} />
                    {errors.name &&<span>{errors.name}</span>}
                </div>

                <div>
                    <label htmlFor="">  Inserte una imagen*: </label>
                    <input type="text" name="image" value={form.image} onChange={valueInputhandler}/>
                    {errors.image &&<span>{errors.image}</span>}
                </div>

                <div>
                    <label htmlFor="">  Vida*: </label>
                    <input type="text" name="life" value={form.life} onChange={valueInputhandler}/>
                    {errors.life &&<span>{errors.life}</span>}
                </div>

                <div>
                    <label htmlFor="">  Ataque*: </label>
                    <input type="text" name="attack" value={form.attack} onChange={valueInputhandler}/>
                    {errors.attack &&<span>{errors.attack}</span>}
                </div>

                <div>
                    <label htmlFor="">  Defensa*: </label>
                    <input type="text" name="defense" value={form.defense} onChange={valueInputhandler}/>
                    {errors.defense &&<span>{errors.defense}</span>}
                </div>

                <div>
                    <label htmlFor="">  Velocidad: </label>
                    <input type="text" name="velocity" value={form.velocity} onChange={valueInputhandler}/>
                </div>

                <div>
                    <label htmlFor="">  Altura: </label>
                    <input type="text" name="height" value={form.height} onChange={valueInputhandler}/>
                </div>

                <div>
                    <label htmlFor="">  Peso: </label>
                    <input type="text" name="weight" value={form.weight} onChange={valueInputhandler}/>
                </div>

                <button type="submit">Create Pokemón</button>
            </form>
        </div>
    )
}
export default Form
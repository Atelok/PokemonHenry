import style from "./Form.module.css"
import { useState } from "react"
import axios from "axios"


const Form = () => {

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



    function valueInputhandler(event, form) {

        const property = event.target.name
        const value = event.target.value

        setForm({...form, [property]: value })
        
        //validate es la funcion creada abajo para verificar los inputs
        validate({...form, [property]: value })
    }

    const validate = (form)=>{

        //validacion para name
        /^[a-zA-Z]+$/.test(form.name) ? setErrors({...errors, name: "" }):setErrors({...errors, name: "No esta correcto" });
        form.name && setErrors({...errors, name: "Debe introducir un nombre" })
    }

    const submitHandler = (event)=> {
        event.preventDefault();
        axios.post("http://localhost:3001/pokemons/", form)
        .then((res)=>alert(res))

    }


    
    // const pushCreatePoke = async() => {
    //     const json = await axios.get()

    // }

    return (
        <div className={style.div_generalDelForm}>

            <div>Crearemos nuestro Pokemón</div>

            <form className={style.loquecontieneel_Form} onSubmit={submitHandler}> 
                <div>
                    <label htmlFor="">* Ingresa un nombre: </label>
                    <input type="text" name="name" value={form.name} onChange={valueInputhandler} />
                    {errors.name &&<span>{errors.name}</span>}
                </div>

                <div>
                    <label htmlFor=""> * Inserte una imagen: </label>
                    <input type="text" name="image" value={form.image} onChange={valueInputhandler}/>
                </div>

                <div>
                    <label htmlFor=""> * Vida: </label>
                    <input type="text" name="life" value={form.life} onChange={valueInputhandler}/>
                </div>

                <div>
                    <label htmlFor=""> * Ataque: </label>
                    <input type="text" name="attack" value={form.attack} onChange={valueInputhandler}/>
                </div>

                <div>
                    <label htmlFor=""> * Defensa: </label>
                    <input type="text" name="defense" value={form.defense} onChange={valueInputhandler}/>
                </div>

                <div>
                    <label htmlFor=""> Velocidad: </label>
                    <input type="text" name="velocity" value={form.velocity} onChange={valueInputhandler}/>
                </div>

                <div>
                    <label htmlFor=""> Altura: </label>
                    <input type="text" name="height" value={form.height} onChange={valueInputhandler}/>
                </div>

                <div>
                    <label htmlFor=""> Peso: </label>
                    <input type="text" name="weight" value={form.weight} onChange={valueInputhandler}/>
                </div>

                <button>Create Pokemón</button>
            </form>
        </div>
    )
}
export default Form
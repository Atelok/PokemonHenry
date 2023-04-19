import style from "./Form.module.css";
import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import InputsForm from "./inputsForm.jsx";

const Form = () => {
  const [errors, setErrors] = useState({
    name: "",
    image: "",
  });
  const [form, setForm] = useState({
    name: "",
    image: "",
    life: 50,
    attack: 50,
    defense: 50,
    velocity: 50,
    height: "",
    weight: "",
    Types: []
  });

  function valueInputhandler(event) {
    const property = event.target.name;
    const value = event.target.value;

    validate({ ...form, [property]: value });
    setForm({ ...form, [property]: value });
    //validate es la funcion creada abajo para verificar los inputs
  }

  const validate = (form) => {
    //validacion para name
    if (form.name){
      /^[a-zA-Z]+$/.test(form.name) ? setErrors({ ...errors, name: "" }) : setErrors({ ...errors, name: "No esta correcto" });}
    else
      !form.name && setErrors({ ...errors, name: "Debe introducir un nombre" });

    // if (form.image && form.name) {
    //   /\.(gif|jpe?g|tiff?|png|webp|bmp)$/i.test(form.image) ? setErrors({...errors, image: "" }):setErrors({...errors, image: "Colocar un Imagen correcta" })}
    // else !form.image && setErrors({...errors, image: "Debe colocar una imagen" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3001/pokemons/", form)
      .then((res) => alert("Pokemón Creado"))
      .catch((err) => alert(err));
  };

  const typesPokemon = useSelector((state) => state.typesPokemon);

  /* FUNCION VERIFICADORA DE MI INPUT CHECKBOX */
  const introduceTypeHandle = (event) => {
    const tipos = event.target.id;
    if (form.Types.includes(tipos)) {
      const aEliminar = form.Types.findIndex((element) => element === tipos);
      form.Types.splice(aEliminar, 1);
      setForm({ ...form, Types: [...form.Types] });
      return;
    }
    setForm({ ...form, Types: [...form.Types, tipos] });
  };
  //-----------------------------------------------

  return (
    <div className={style.div_generalDelForm}>
      <div>Crearemos nuestro Pokemón</div>
      <InputsForm form={form} submitHandler={submitHandler} errors={errors} valueInputhandler= {valueInputhandler} typesPokemon={typesPokemon} introduceTypeHandle={introduceTypeHandle}/>
      
      <h6> (*) Se deben rellenar obligatoriamente</h6>
    </div>
  );
};
export default Form;

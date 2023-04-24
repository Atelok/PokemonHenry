import style from "./Form.module.css";
// import { useState } from "react";
// import axios from "axios";
import { useSelector } from "react-redux";
import InputsForm from "./inputsForm.jsx";
// import InputsForm2 from "./Form1";
import pikachu from "./img/Creacion-Poke-Defecto.png";
import useForm from "./UseForm";
import charmander from "./img/charmander.png";

import Alert from "../../extras/alert";







// Formulario inicial
const initialForm = {
  name: "",
  image: `${pikachu}`,
  life: 50,
  attack: 50,
  defense: 50,
  velocity: 50,
  height: null,
  weight: null,
  Types: [],
};




//validación con REGEX
const validationsForm = (form) => {
  let errors = {};

  const regexname = /^[a-zA-Z]+$/;
  const regexEmail = /\.(gif|jpe?g|tiff?|png|webp|bmp)$/i;

  if (!form.name.trim()) {
    errors.name = "El campo del nombre es requerido";
  } else if (!regexname.test(form.name.trim()))
    errors.name =
      "El campo del nombre solo acepta letras en Mayuscula y Minuscula";

  if (!form.image.trim()) {
    errors.image = "El campo de la image es requerido";
  } else if (!regexEmail.test(form.image.trim()))
    errors.image = "No es un enlace URL correcto";

  return errors;
};

/* */


const Form = () => {

  const {
    form,
    errors,

    handleChange,
    handleBlur,
    handleSubmit,
    introduceTypeHandle
  } = useForm(initialForm, validationsForm);


  const typesPokemon = useSelector((state) => state.typesPokemon);


  return (
    <div className={style.div_generalDelForm}>
      <div style={{color: "red", fontSize: "25  px", paddingBottom: "15px"}}>Crearemos nuestro Pokemón</div>
      <InputsForm
        form={form}
        errors={errors}
        submitHandler={handleSubmit}
        handleBlur={handleBlur}
        handleChange={handleChange}
        typesPokemon={typesPokemon}
        introduceTypeHandle={introduceTypeHandle}
      />
      {/* <InputsForm2 form={form} submitHandler={submitHandler} errors={errors} valueInputhandler= {valueInputhandler} typesPokemon={typesPokemon} introduceTypeHandle={introduceTypeHandle}/> */}

      <h6> (*) Se deben rellenar obligatoriamente</h6>
      <div className={style.charmander}><img src={charmander} alt="charmander" /></div>

    </div>
  );
};
export default Form;

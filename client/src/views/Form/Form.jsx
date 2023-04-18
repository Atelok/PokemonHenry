import style from "./Form.module.css";
import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

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
    if (form.name)
      /^[a-zA-Z]+$/.test(form.name)
        ? setErrors({ ...errors, name: "" })
        : setErrors({ ...errors, name: "No esta correcto" });
    else
      !form.name && setErrors({ ...errors, name: "Debe introducir un nombre" });

    // if (form.image) /\.(gif|jpe?g|tiff?|png|webp|bmp)$/i.test(form.image) ? setErrors({...errors, image: "" }):setErrors({...errors, image: "Colocar un Imagen correcta" });
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
    const tipos = event.target.value;
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

      <form className={style.loquecontieneel_Form} onSubmit={submitHandler}>
        <div>
          <label htmlFor=""> Ingresa un nombre(*): </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={valueInputhandler}
          />
          {errors.name && <span>{errors.name}</span>}
        </div>

        <div>
          <label htmlFor=""> Inserte una imagen(*): </label>
          <input
            type="text"
            name="image"
            value={form.image}
            onChange={valueInputhandler}
          />
          {errors.image && <span>{errors.image}</span>}
        </div>

        <div>
          <label htmlFor=""> Vida(*): </label>
          <input
            type="range"
            min={1}
            max={100}
            name="life"
            value={form.life}
            onChange={valueInputhandler}
          />
          <span>{form.life}</span>
          {/* {errors.life &&<span>{errors.life}</span>} */}
        </div>

        <div>
          <label htmlFor=""> Ataque(*): </label>
          <input
            type="range"
            min={1}
            max={100}
            name="attack"
            value={form.attack}
            onChange={valueInputhandler}
          />
          <span>{form.attack}</span>
          {/* {errors.attack &&<span>{errors.attack}</span>} */}
        </div>

        <div>
          <label htmlFor=""> Defensa(*): </label>
          <input
            type="range"
            min={1}
            max={100}
            name="defense"
            value={form.defense}
            onChange={valueInputhandler}
          />
          <span>{form.defense}</span>
          {/* {errors.defense &&<span>{errors.defense}</span>} */}
        </div>

        <div>
          <label htmlFor=""> Velocidad: </label>
          <input
            type="range"
            min={1}
            max={100}
            name="velocity"
            value={form.velocity}
            onChange={valueInputhandler}
          />
          <span>{form.velocity}</span>
        </div>

        <div>
          <label htmlFor=""> Altura: </label>
          <input
            type="text"
            name="height"
            value={form.height}
            onChange={valueInputhandler}
          />
        </div>

        <div>
          <label htmlFor=""> Peso: </label>
          <input
            type="text"
            name="weight"
            value={form.weight}
            onChange={valueInputhandler}
          />
        </div>

        <div>
          <label htmlFor="">Tipos: </label>
          {typesPokemon.map((tipo) => {
            return (
              <label htmlFor="">
                {tipo}:
                {form.Types.length >= 2 &&
                tipo !== form.Types[0] &&
                tipo !== form.Types[1] ? (
                  <input
                    type="checkbox"
                    value={tipo}
                    onClick={introduceTypeHandle}
                    disabled
                  />
                ) : (
                  <input
                    type="checkbox"
                    value={tipo}
                    onClick={introduceTypeHandle}
                  />
                )}
              </label>
            );
          })}
        </div>

        <button type="submit">Create Pokemón</button>
      </form>
      <h6> (*) Se deben rellenar obligatoriamente</h6>
    </div>
  );
};
export default Form;

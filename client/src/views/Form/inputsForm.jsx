import style from "./Form.module.css";

const InputsForm = ({
  form,
  submitHandler,
  errors,
  handleChange,
  typesPokemon,
  introduceTypeHandle,
  handleBlur,
}) => {
  const arrayType = [];

  for (let i = 1; i <= typesPokemon.length; i++) {
    arrayType.push(`${i}`);
  }


  return (
    <div className={style.cuadro_Form}>
      <form className={style.loquecontieneel_Form} onSubmit={submitHandler}>
        <div style={{paddingBottom : "40px"}}>
          <label htmlFor=""> Ingresa un nombre(*): </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            onBlur={handleBlur}
            style={{width:"80%"}}
            required
            placeholder="Ingrese un nombre"
          />
          {errors.name && (
            <p style={{position: "absolute"}}>{errors.name}</p>
          )}
        </div>

        <div style={{paddingBottom : "40px"}}>
          <label htmlFor=""> Inserte una imagen(*): </label>
          <input
            type="text"
            name="image"
            value={form.image}
            onChange={handleChange}
            onBlur={handleBlur}
            style={{width:"80%"}}
            required
            placeholder="Ingrese la ruta de su imagen"
            
          />
          {errors.image && (
            <p style={{position: "absolute"}}>{errors.image}</p>
          )}
        </div>



      <div>
        <div>
          <label htmlFor=""> Vida(*): </label>
          <input
            type="range"
            min={1}
            max={200}
            name="life"
            value={form.life}
            onChange={handleChange}
          />
          <span>{form.life}</span>
          {/* {errors.life &&<span>{errors.life}</span>} */}
        </div>

        <div>
          <label htmlFor=""> Ataque(*): </label>
          <input
            type="range"
            min={1}
            max={200}
            name="attack"
            value={form.attack}
            onChange={handleChange}
          />
          <span>{form.attack}</span>
          {/* {errors.attack &&<span>{errors.attack}</span>} */}
        </div>

        <div>
          <label htmlFor=""> Defensa(*): </label>
          <input
            type="range"
            min={1}
            max={200}
            name="defense"
            value={form.defense}
            onChange={handleChange}
          />
          <span>{form.defense}</span>
          {/* {errors.defense &&<span>{errors.defense}</span>} */}
        </div>

        <div>
          <label htmlFor=""> Velocidad: </label>
          <input
            type="range"
            min={1}
            max={200}
            name="velocity"
            value={form.velocity}
            onChange={handleChange}
          />
          <span>{form.velocity}</span>
        </div>
        </div>



      <div >
        <div>
          <label htmlFor=""> Altura: </label>
          <input
            type="text"
            name="height"
            value={form.height}
            onChange={handleChange}
            className={style.input_Height}
          />
          <span> Metros</span>
        </div>

        <div>
          <label htmlFor=""> Peso: </label>
          <input
            type="text"
            name="weight"
            value={form.weight}
            onChange={handleChange}
            className={style.input_Weight}
          />
          <span> Kg.</span>
        </div>
      </div>



        <label htmlFor="">Tipos: </label>
        <div className={style.div_contenedor_label}>
          {typesPokemon.map((tipo, index) => {
            return (
              <label className={style.label_Form} key={index} htmlFor="">
                {tipo}:
                {form.Types.length === 2 &&
                arrayType.includes(form.Types[0]) &&
                arrayType.includes(form.Types[1]) ? (
                  <input
                    type="checkbox"
                    value={tipo}
                    onClick={introduceTypeHandle}
                    id={index + 1}
                    disabled
                  />
                ) : (
                  <input
                    type="checkbox"
                    value={tipo}
                    id={index + 1}
                    onClick={introduceTypeHandle}
                  />
                )}
              </label>
            );
          })}
        </div>

        <button type="submit">Create Pokemón</button>
      </form>
    </div>
  );
};

export default InputsForm;

import style from "./Form.module.css";

const InputsForm = ({
  form,
  submitHandler,
  errors,
  valueInputhandler,
  typesPokemon,
  introduceTypeHandle,
}) => {


  const arrayType = []

    for (let i = 1; i <= typesPokemon.length; i++) {
        arrayType.push(`${i}`)

    }

  // console.log(arrayType);
  // console.log(form.Types);


  return (
  <div className={style.cuadro_Form}>
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
        {/* {errors.image && <span>{errors.image}</span>} */}
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
          onChange={valueInputhandler}
          className={style.input_Weight}
        />
        <span> Kg.</span>
      </div>

      <div className={style.div_contenedor_label}>
        <div>
        <label htmlFor="">Tipos: </label>

        </div>
        {typesPokemon.map((tipo , index) => {
          
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
                  id={index+1}
                  disabled
                />
              ) : (
                <input
                  type="checkbox"
                  value={tipo}
                  id={index+1}
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

import style from "./Form.module.css";

const InputsForm = ({
  form,
  submitHandler,
  errors,
  valueInputhandler,
  typesPokemon,
  introduceTypeHandle,
}) => {
  return (
  <div>
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
        <span> Metros</span>
      </div>

      <div>
        <label htmlFor=""> Peso: </label>
        <input
          type="text"
          name="weight"
          value={form.weight}
          onChange={valueInputhandler}
        />
        <span> Kg.</span>
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
    </div>
  );
};

export default InputsForm;

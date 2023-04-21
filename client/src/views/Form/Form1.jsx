import style from "./Form1.module.css";

const InputsForm2 = ({
  form,
  submitHandler,
  errors,
  valueInputhandler,
  typesPokemon,
  introduceTypeHandle,
}) => {
  const arrayType = [];

  for (let i = 1; i <= typesPokemon.length; i++) {
    arrayType.push(`${i}`);
  }

  // console.log(arrayType);
  // console.log(form.Types);

  return (
    <div className={style.cuadro_Form}>
      <form className={style.loquecontieneel_Form} onSubmit={submitHandler}>
        <div >
          <label htmlFor="" className={style.div1}> Ingresa un nombre(*): </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={valueInputhandler}
            className={style.div9}
          />
          {errors.name && <span className={style.div17}>{errors.name}</span>}
        </div>

        <div>
          <label htmlFor="" className={style.div2}> Inserte una imagen(*): </label>
          <input
            type="text"
            name="image"
            value={form.image}
            onChange={valueInputhandler}
            className={style.div10}
          />
          {/* {errors.image && <span>{errors.image}</span>} */}
        </div>

        <div>
          <label htmlFor="" className={style.div3}> Vida(*): </label>
          <input
            type="range"
            min={1}
            max={100}
            name="life"
            value={form.life}
            onChange={valueInputhandler}
            className={style.div11}
          />
          <span>{form.life}</span>
          {/* {errors.life &&<span>{errors.life}</span>} */}
        </div>

        <div>
          <label htmlFor="" className={style.div4}> Ataque(*): </label>
          <input
            type="range"
            min={1}
            max={100}
            name="attack"
            value={form.attack}
            onChange={valueInputhandler}
            className={style.div12}
          />
          <span>{form.attack}</span>
          {/* {errors.attack &&<span>{errors.attack}</span>} */}
        </div>

        <div>
          <label htmlFor="" className={style.div5}> Defensa(*): </label>
          <input
            type="range"
            min={1}
            max={100}
            name="defense"
            value={form.defense}
            onChange={valueInputhandler}
            className={style.div13}
          />
          <span>{form.defense}</span>
          {/* {errors.defense &&<span>{errors.defense}</span>} */}
        </div>

        <div>
          <label htmlFor="" className={style.div6}> Velocidad: </label>
          <input
            type="range"
            min={1}
            max={100}
            name="velocity"
            value={form.velocity}
            onChange={valueInputhandler}
            className={style.div14}
          />
          <span>{form.velocity}</span>
        </div>

        <div>
          <label htmlFor="" className={style.div7}> Altura: </label>
          <input
            type="text"
            name="height"
            value={form.height}
            onChange={valueInputhandler}
            className={style.div15}
          />
          <span> Metros</span>
        </div>

        <div>
          <label htmlFor="" className={style.div8}> Peso: </label>
          <input
            type="text"
            name="weight"
            value={form.weight}
            onChange={valueInputhandler}
            className={style.div16}
          />
          <span> Kg.</span>
        </div>

        <div className={style.div_contenedor_label}>
          <div>
            <label htmlFor="">Tipos: </label>
          </div>
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

export default InputsForm2;

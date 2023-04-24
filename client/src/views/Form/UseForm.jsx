import { useState } from "react";
import axios from "axios";

const useForm = (initialForm, validationsForm) => {

  const [form, setForm] = useState(initialForm);

  const [errors, setErrors] = useState({});

  
// AGREGAR A FORM LOS DEL EVENTO Y VALUE
  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm({ ...form, [name]: value });
  };



//
  const handleBlur = (event) => {
    handleChange(event)
    setErrors(validationsForm(form))
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3001/pokemons/", form)
      .then((res) => {
        alert(res.data.message);
        setForm(initialForm);
      })
      .catch((error) => {
        alert(error.response.data.error);
      });
  };

    /* FUNCION VERIFICADORA DE MI INPUT CHECKBOX */
    const introduceTypeHandle = (event) => {
      const tipos = event.target.id;
  
      if (form.Types.includes(`${tipos}`)) {
        const aEliminar = form.Types.findIndex(
          (element) => element === `${tipos}`);
        form.Types.splice(aEliminar, 1);
        setForm({ ...form, Types: [...form.Types] });
        return;
      }
      setForm({ ...form, Types: [...form.Types, tipos] });
    };
    //-----------------------------------------------



  return {
    form,
    errors,

    handleChange,
    handleBlur,
    handleSubmit,
    introduceTypeHandle
  };
};

export default useForm;

import style from "./Home.module.css";

const NumberList = ({ pageQuantity, onPageChange }) => {
  const array = [];

  for (let i = 0; i < pageQuantity; i++) {
    array.push(i);
  }

  // CAMBIAR LA PAGINA
  const paginate = (num) => {
    onPageChange(num);
  };

  

  return (
    <ul className={style.paginado_Ul}>
      {array.map((num) => {
        return (
          <li
            className={style.paginado_Li}
            key={num}
            onClick={() => paginate(num)}
          >
            <button>{num + 1}</button>
          </li>
        );
      })}
    </ul>
  );
};
export default NumberList;

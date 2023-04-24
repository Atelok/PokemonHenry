import style from "./alert.module.css";

function Alert(props) {
  return (
    <div className={`alert ${props.type}`}>
      <span className={style.closebtn} onClick={props.onClose}>
        &times;
      </span>
      <strong>{props.title}</strong> {props.message}
    </div>
  );
}

export default Alert;

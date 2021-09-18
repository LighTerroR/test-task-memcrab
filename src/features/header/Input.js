import './Input.css'

function Input(props) {
  return (
    <div className="labelContainer">
      <label>{props.label}</label>
      <input />
    </div>
  );
}

export default Input;

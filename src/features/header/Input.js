import TextField from '@material-ui/core/TextField';

function Input(props) {
  return <TextField id="standard-basic" label={props.label} size='medium' />;
}

export default Input;

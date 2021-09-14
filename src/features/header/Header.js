import { makeStyles } from '@material-ui/core';
import Input from './Input'

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(2),
      width: '30%',
    },
  },
}));

function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Input label="введите количество строк М" />
      <Input label="введите количество столбцов N" />
      <Input label="введите количество выделяемых элементов Х" />
    </div>
  );
}

export default Header;
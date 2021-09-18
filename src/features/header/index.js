import Input from './Input'
import './styles.css'

function Header() {

  return (
    <div className="header">
      <Input label="введите количество строк М:" />
      <Input label="введите количество столбцов N:" />
      <Input label="введите количество выделяемых элементов Х:" />
    </div>
  );
}

export default Header;
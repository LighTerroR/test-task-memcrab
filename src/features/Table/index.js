import TableCell from "./TableCell";
import './styles.css'

export default function Table(props) {
  let matrix = props.value;

  return (
    <>
      <table>
        <tr>
          <th>Index</th>
          {matrix.map((item, index) => (
            <th>{index}</th>
          ))}
          <th>Сумма</th>
        </tr>
        {matrix.map((mass, numMass) => (
          <tr>
            <th>{numMass}</th>
            {mass.map((item, index) => (
              <TableCell id={numMass + "" + index} amount={item} />
            ))}
            <td>{mass.reduce((prevItem, item) => prevItem + item, 0)}</td>
          </tr>
        ))}
        <tr>
          <th>Среднее</th>
          {matrix.map((item, index, array) => (
            <td>{ Math.round(array.reduce((prevValue, currentValue) => prevValue + currentValue[index], 0) / array.length) }</td>
          ))}
        </tr>
      </table>
    </>
  );
}

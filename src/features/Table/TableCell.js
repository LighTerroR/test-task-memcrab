export default function TableCell(props) {
  const id = props.id;
  let amount = props.amount;
  return (
    <td id={id}>{ amount }</td>
  )
}
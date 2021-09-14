import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function randomizer() {
  return Math.round(Math.random() * (999-(-999))+(-999))
}

function createMatrix(m, n) {
  let array = [], subarray = [];
  for (let i = 0; i < n; i++) {
    subarray.length = 0;
    for (let j = 0; j < m; j++) {
      subarray.push(randomizer());
    }
    array[i] = subarray.slice(0);
  }
  return array;
}

const rows = createMatrix(9, 9);

export default function MyTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Index</TableCell>
            {rows.map((item, index) => (
              <TableCell align="right">{index}</TableCell>
            ))}
            <TableCell align="right">Сумма</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {index}
              </TableCell>
              {row.map((item) => (
                <TableCell align="right">{item}</TableCell>
              ))}
              <TableCell align="right">
                {row.reduce((previousValue, item) => previousValue + item, 0)}
              </TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell component="th" scope="row">
              Среднее
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

import { FC, ReactElement } from 'react';
import { TableVirtuoso } from 'react-virtuoso';

import {
  Stack,
  TableContainer,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';

import { selectZippedResults } from '@/store/slices/tabulationSlice';
import { useAppSelector } from '@/store/store';

interface RowData {
  index: number;
  xLabel: ReactElement;
  x: string;
  yLabel: ReactElement;
  y: string;
}

// const TableComponents = {
//   Scroller: React.forwardRef((props, ref) => <TableContainer component={Paper} {...props} ref={ref} />),
//   Table: (props) => <Table {...props} style={{ borderCollapse: 'separate' }} />,
//   TableHead: TableHead,
//   TableRow: TableRow,
//   TableBody: React.forwardRef((props, ref) => <TableBody {...props} ref={ref} />),
// }

const TabulationTable: FC = () => {
  const zippedResults = useAppSelector(selectZippedResults);
  console.log({ zippedResults });
  return (
    <Stack flex={1} px={7} pt={2}>
      g{/*<TableVirtuoso*/}
      {/*  style={{ height: 400 }}*/}
      {/*  data={zippedResults}*/}
      {/*  components={TableComponents}*/}
      {/*  fixedHeaderContent={() => (*/}
      {/*    <TableRow>*/}
      {/*      <TableCell style={{ width: 150, background: 'white' }}>*/}
      {/*        Name*/}
      {/*      </TableCell>*/}
      {/*      <TableCell style={{ background: 'white' }}>*/}
      {/*        Description*/}
      {/*      </TableCell>*/}
      {/*    </TableRow>*/}
      {/*  )}*/}
      {/*  itemContent={(index, user) => (*/}
      {/*    <>*/}
      {/*      <TableCell style={{ width: 150, background: 'white' }}>*/}
      {/*        {user.name}*/}
      {/*      </TableCell>*/}
      {/*      <TableCell style={{ background: 'white'  }}>*/}
      {/*        {user.description}*/}
      {/*      </TableCell>*/}
      {/*    </>*/}
      {/*  )}*/}
      {/*/>*/}
    </Stack>
  );
};

const createRowData = (index: number, x: string, y: string): RowData => ({
  index,
  xLabel: (
    <>
      x<sub>{index}</sub>
    </>
  ),
  x,
  yLabel: (
    <>
      y<sub>{index}</sub>
    </>
  ),
  y,
});

{
  /*<TableContainer component={Paper}>*/
}
{
  /*  <Table aria-label="simple table">*/
}
{
  /*    <TableHead>*/
}
{
  /*      <TableRow>*/
}
{
  /*        <TableCell></TableCell>*/
}
{
  /*        <TableCell align="center">*/
}
{
  /*          x<sub>i</sub>*/
}
{
  /*        </TableCell>*/
}
{
  /*        <TableCell align="center">*/
}
{
  /*          y<sub>i</sub>*/
}
{
  /*        </TableCell>*/
}
{
  /*        <TableCell></TableCell>*/
}
{
  /*      </TableRow>*/
}
{
  /*    </TableHead>*/
}
{
  /*    <TableBody>*/
}
{
  /*      {rows.map((row) => (*/
}
{
  /*        <TableRow*/
}
{
  /*          key={row.name}*/
}
{
  /*          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}*/
}
{
  /*        >*/
}
{
  /*          <TableCell component="th" scope="row" align="center">*/
}
{
  /*            {row.name}*/
}
{
  /*          </TableCell>*/
}
{
  /*          <TableCell align="center">{row.calories}</TableCell>*/
}
{
  /*          <TableCell align="center">{row.fat}</TableCell>*/
}
{
  /*          <TableCell align="center">{row.carbs}</TableCell>*/
}
{
  /*        </TableRow>*/
}
{
  /*      ))}*/
}
{
  /*    </TableBody>*/
}
{
  /*  </Table>*/
}
{
  /*</TableContainer> */
}

export default TabulationTable;

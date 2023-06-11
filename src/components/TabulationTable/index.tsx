import { FC, forwardRef } from 'react';
import { TableComponents, TableVirtuoso } from 'react-virtuoso';

import {
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

import { selectZippedResults } from '@/store/slices/tabulationSlice';
import { useAppSelector } from '@/store/store';

const TableComponents: TableComponents<
  ReturnType<typeof selectZippedResults>[number]
> = {
  Scroller: forwardRef((props, ref) => <TableContainer {...props} ref={ref} />),
  Table: (props) => <Table {...props} style={{ borderCollapse: 'separate' }} />,
  TableHead: TableHead,
  TableRow: TableRow,
  TableBody: forwardRef((props, ref) => <TableBody {...props} ref={ref} />),
};

const TabulationTable: FC = () => {
  const zippedResults = useAppSelector(selectZippedResults);
  return (
    <Stack flex={1} pl={7} pt={2}>
      <TableVirtuoso
        data={zippedResults}
        components={TableComponents}
        fixedHeaderContent={() => (
          <TableRow>
            <TableCell align="center" sx={{ backgroundColor: 'white' }}>
              i
            </TableCell>
            <TableCell align="center" sx={{ backgroundColor: 'white' }}>
              x<sub>i</sub>
            </TableCell>
            <TableCell align="center" sx={{ backgroundColor: 'white' }}>
              y<sub>i</sub>
            </TableCell>
          </TableRow>
        )}
        itemContent={(index, { x, y }) => (
          <>
            <TableCell align="center">{index}</TableCell>
            <TableCell align="center">{x}</TableCell>
            <TableCell align="center">{y}</TableCell>
          </>
        )}
      />
    </Stack>
  );
};

export default TabulationTable;

import { FC } from 'react';

import {
  TextField,
  Stack,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';

import { decrement, increment } from '@/store/slices/counterSlice';
import { useAppDispatch } from '@/store/store';

const ArgsControls: FC = () => {
  const dispatch = useAppDispatch();

  return (
    <Stack
      gap={2}
      direction="row"
      alignItems="center"
      justifyContent="center"
      px={2}
    >
      <FunctionSelector />
      <TextField label="X start" defaultValue="-1" size="small" />{' '}
      <TextField label="X end" defaultValue="-1" size="small" />
    </Stack>
  );
};

const FunctionSelector: FC = () => {
  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="select-formula-label">Formula</InputLabel>
      <Select
        labelId="select-formula-label"
        id="demo-select-small"
        value={1}
        label="Function"
      >
        <MenuItem value={1}>
          x<sup>2</sup>
        </MenuItem>
        <MenuItem value={1}>1/x</MenuItem>
      </Select>
    </FormControl>
  );
};

export default ArgsControls;

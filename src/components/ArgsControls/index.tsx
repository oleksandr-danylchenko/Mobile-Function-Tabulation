import { ChangeEvent, FC, useCallback } from 'react';

import {
  debounce,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select/SelectInput';

import { FunctionKey, functionOptions } from '@/fixtures/functions';
import { setFunc, setXStart, setXEnd } from '@/store/slices/tabulationSlice';
import { useAppDispatch, useAppSelector } from '@/store/store';

const ArgsControls: FC = () => {
  const dispatch = useAppDispatch();

  const handleXChange = useCallback(
    (prop: 'xStart' | 'xEnd') =>
      debounce((event: ChangeEvent<HTMLInputElement>): void => {
        const value = Number(event.target.value);

        if (prop === 'xStart') {
          dispatch(setXStart(value));
        } else {
          dispatch(setXEnd(value));
        }
      }, 250),
    [dispatch],
  );

  return (
    <Stack
      gap={2}
      direction="row"
      alignItems="center"
      justifyContent="center"
      px={2}
    >
      <FunctionSelector />
      <TextField
        label="X start"
        defaultValue="-1"
        size="small"
        type="number"
        onChange={handleXChange('xStart')}
      />
      <TextField
        label="X end"
        defaultValue="1"
        size="small"
        type="number"
        onChange={handleXChange('xEnd')}
      />
    </Stack>
  );
};

const FunctionSelector: FC = () => {
  const dispatch = useAppDispatch();

  const funcKey = useAppSelector((state) => state.tabulation.funcKey);

  const handleChange = (event: SelectChangeEvent<FunctionKey>): void =>
    void dispatch(setFunc(event.target.value as FunctionKey));

  return (
    <FormControl sx={{ minWidth: 130 }} size="small">
      <InputLabel id="select-formula-label">Formula</InputLabel>
      <Select
        labelId="select-formula-label"
        id="demo-select-small"
        value={funcKey}
        label="Formula"
        onChange={handleChange}
      >
        {functionOptions.map((option) => (
          <MenuItem key={option.key} value={option.key}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default ArgsControls;

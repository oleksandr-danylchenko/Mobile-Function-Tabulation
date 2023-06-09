import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  TabulationControls,
  TabulationResults,
} from '@/store/slices/tabulationSlice';
import { evaluateFunctionResults } from '@/utils/calculate';

export const reevaluateFunc = createAsyncThunk<
  TabulationResults,
  TabulationControls
>('tabulation/reevaluateFunc', async (controls) => {
  return new Promise((res) => {
    setTimeout(() => {
      res(evaluateFunctionResults(controls));
    });
  });
});

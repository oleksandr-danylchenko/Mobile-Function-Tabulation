import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  TabulationControls,
  TabulationResults,
} from '@/store/slices/tabulationSlice';
import { evaluationWorkerInstance } from '@/sw/evaluationWorker/instance';

export const reevaluateFunc = createAsyncThunk<
  TabulationResults,
  TabulationControls
>('tabulation/reevaluateFunc', async (controls) =>
  evaluationWorkerInstance.evaluateFunctionResultsSW(controls),
);

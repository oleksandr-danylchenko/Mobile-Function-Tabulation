import { createAppAsyncThunk } from '@/store/actions/index';
import {
  TabulationControls,
  TabulationResults,
} from '@/store/slices/tabulationSlice';
import { evaluationWorkerInstance } from '@/webWorkers/evaluation/instance';

export const evaluateFunc = createAppAsyncThunk<TabulationResults, void>(
  'tabulation/evaluateFunc',
  async (_, thunkAPI) =>
    evaluationWorkerInstance.evaluateFunctionResultsSW(
      thunkAPI.getState().tabulation.controls,
      thunkAPI.signal,
    ),
);

export const reevaluateFunc = createAppAsyncThunk<
  TabulationResults,
  TabulationControls
>('tabulation/reevaluateFunc', async (newControls, thunkAPI) =>
  evaluationWorkerInstance.evaluateFunctionResultsSW(
    newControls,
    thunkAPI.signal,
  ),
);

import {
  TabulationControls,
  TabulationResults,
} from '@/store/slices/tabulationSlice';
import { createAppAsyncThunk } from '@/store/store';
import { evaluationWorkerInstance } from '@/webWorkers/evaluation/instance';

export const reevaluateFunc = createAppAsyncThunk<
  TabulationResults,
  TabulationControls
>('tabulation/reevaluateFunc', async (newControls) =>
  evaluationWorkerInstance.evaluateFunctionResultsSW(newControls),
);

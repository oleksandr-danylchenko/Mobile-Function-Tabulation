import { functionsOptions } from '@/fixtures/functions';
import {
  TabulationControls,
  TabulationResult,
} from '@/store/slices/tabulationSlice';

export const evaluateFunctionResults = (
  controls: TabulationControls,
): Array<TabulationResult> => {
  const { funcKey, xStart, xEnd, step } = controls;
  const funcExecute = functionsOptions[funcKey]!.execute;

  const results: Array<TabulationResult> = [];
  for (let x = xStart; x <= xEnd; x += step) {
    results.push({ x, y: funcExecute(x) });
  }
  return results;
};

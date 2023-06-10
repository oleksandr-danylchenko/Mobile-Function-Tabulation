import { functionsOptions } from '@/fixtures/functions';
import {
  TabulationControls,
  TabulationResults,
} from '@/store/slices/tabulationSlice';

export const evaluateFunctionResults = (
  controls: TabulationControls,
): TabulationResults => {
  const { funcKey, xStart, xEnd, step } = controls;
  const funcExecute = functionsOptions[funcKey]!.execute;

  const results: TabulationResults = {
    evaluatedAt: Date.now(),
    x: [],
    y: [],
  };
  for (let x = xStart; x <= xEnd; x += step) {
    results.x.push(x);
    results.y.push(funcExecute(x));
  }
  return results;
};

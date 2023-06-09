/// <reference lib="webworker" />
import { evaluateFunctionResults } from '@/utils/calculate';

export interface EvaluationWorker {
  evaluateFunctionResultsSW: typeof evaluateFunctionResults;
}

export const evaluateFunctionResultsSW: EvaluationWorker['evaluateFunctionResultsSW'] =
  (controls) => {
    return evaluateFunctionResults(controls);
  };

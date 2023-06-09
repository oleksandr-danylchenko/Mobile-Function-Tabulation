import type { EvaluationWorker } from './worker';

export const evaluationWorkerInstance = new ComlinkWorker<EvaluationWorker>(
  new URL('./worker', import.meta.url),
);

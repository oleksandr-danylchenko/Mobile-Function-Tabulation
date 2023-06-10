export const evaluationWorkerInstance = new ComlinkWorker<
  typeof import('./worker')
>(new URL('./worker', import.meta.url));

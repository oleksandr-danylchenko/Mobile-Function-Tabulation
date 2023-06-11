import { FC, useCallback, useEffect } from 'react';

import { Stack } from '@mui/material';

import ArgsControls from '@/components/ArgsControls';
import AuthorModal from '@/components/AuthorModal';
import Plot from '@/components/Plot';
import { evaluateFunc, reevaluateFunc } from '@/store/actions/tabulation';
import { TabulationControls } from '@/store/slices/tabulationSlice';
import { useAppDispatch, useAppSelector } from '@/store/store';

const Home: FC = () => {
  const dispatch = useAppDispatch();

  const controls = useAppSelector((state) => state.tabulation.controls);

  const isEvaluating = useAppSelector((state) => state.tabulation.isEvaluating);
  const results = useAppSelector((state) => state.tabulation.results);

  useEffect(() => {
    if (!results) {
      dispatch(evaluateFunc());
    }
  }, [dispatch, results]);

  const handleControlsBlur = useCallback(
    (newControls: TabulationControls) => {
      dispatch(reevaluateFunc(newControls));
    },
    [dispatch],
  );

  return (
    <Stack height="100vh">
      <AuthorModal />
      <Plot />
      <ArgsControls defaultValues={controls} onBlur={handleControlsBlur} />
    </Stack>
  );
};

export default Home;

import { FC, useCallback, useEffect, useRef } from 'react';

import { Stack } from '@mui/material';
import { isEqual } from 'lodash';
import { useToggle } from 'usehooks-ts';

import ArgsControls from '@/components/ArgsControls';
import AuthorModal from '@/components/AuthorModal';
import Plot from '@/components/Plot';
import PlotOverlay from '@/components/PlotOverlay';
import StaticButtonsContainer from '@/components/StaticButtonsContainer';
import TabulationTable from '@/components/TabulationTable';
import TabulationViewToggle from '@/components/TabulationViewToggle';
import { usePreviousRender } from '@/hooks';
import { evaluateFunc, reevaluateFunc } from '@/store/actions/tabulation';
import { TabulationControls } from '@/store/slices/tabulationSlice';
import { TabulationView } from '@/store/slices/uiSlice';
import { useAppDispatch, useAppSelector } from '@/store/store';

const Home: FC = () => {
  const dispatch = useAppDispatch();

  const tabulationView = useAppSelector((state) => state.ui.tabulationView);

  const controls = useAppSelector((state) => state.tabulation.controls);

  const isEvaluating = useAppSelector((state) => state.tabulation.isEvaluating);
  const results = useAppSelector((state) => state.tabulation.results);
  const prevEvaluatedAt = usePreviousRender(results?.evaluatedAt);

  const evaluationPromiseRef = useRef<any>(null);

  useEffect(() => {
    if (!results) {
      evaluationPromiseRef.current = dispatch(evaluateFunc());
    }
  }, [dispatch, results]);

  const [isControlsEditing, toggleEditing] = useToggle();
  const handleControlsBlur = useCallback(
    (newControls: TabulationControls) => {
      toggleEditing();

      if (!isEqual(controls, newControls)) {
        evaluationPromiseRef.current?.abort?.(); // Abort ongoing evaluation
        evaluationPromiseRef.current = dispatch(reevaluateFunc(newControls));
      }
    },
    [controls, dispatch, toggleEditing],
  );

  useEffect(() => {
    if (results && results.evaluatedAt !== prevEvaluatedAt) {
      evaluationPromiseRef.current = null; // Prev evaluation is done
    }
  }, [prevEvaluatedAt, results]);

  return (
    <Stack height="100vh">
      <StaticButtonsContainer>
        <AuthorModal />
        <TabulationViewToggle />
      </StaticButtonsContainer>
      {tabulationView === TabulationView.PLOT ? (
        <PlotOverlay isEditing={isControlsEditing} isEvaluating={isEvaluating}>
          <Plot />
        </PlotOverlay>
      ) : (
        <TabulationTable />
      )}
      <ArgsControls
        defaultValues={controls}
        onFocus={toggleEditing}
        onBlur={handleControlsBlur}
      />
    </Stack>
  );
};

export default Home;

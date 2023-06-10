import { FC, useRef, useCallback, useState, useEffect } from 'react';

import { Box } from '@mui/material';
// import Desmos from 'desmos';

import { useAppSelector } from '@/store/store';

const Plot: FC = () => {
  const isEvaluating = useAppSelector((state) => state.tabulation.isEvaluating);
  const results = useAppSelector((state) => state.tabulation.results);

  const [calculator, setCalculator] = useState<Desmos.Calculator | null>(null);

  const renderDesmos = useCallback(
    (el: HTMLDivElement) => {
      if (!el || calculator) return;
      setCalculator(window.Desmos.GraphingCalculator(el, {}));
    },
    [calculator],
  );

  useEffect(() => {
    if (!calculator || isEvaluating || !results) return;

    calculator.setExpression({
      type: 'table',
      columns: [
        {
          latex: 'x',
          values: ['1', '2', '3', '4', '5'],
          dragMode: Desmos.DragModes.NONE,
        },
        {
          latex: 'y',
          values: ['1', '4', '9', '16', '25'],
          dragMode: Desmos.DragModes.NONE,
        },
      ],
    });
  }, [calculator, isEvaluating, results]);

  return (
    <Box
      ref={renderDesmos}
      flex={1}
      sx={{
        backgroundColor: 'primary.lighter',
        borderBottomLeftRadius: (theme) => theme.spacing(2.2),
        borderBottomRightRadius: (theme) => theme.spacing(2.2),
      }}
    />
  );
};

export default Plot;

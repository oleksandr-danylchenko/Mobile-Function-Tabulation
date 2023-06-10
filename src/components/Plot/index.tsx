import { FC, useCallback, useEffect, useState } from 'react';

import { SerializedStyles } from '@emotion/react';
import { Box, css, Theme, useTheme } from '@mui/material';

// import Desmos from 'desmos';
import { MAX_DIMENSIONS_BOUNDS } from '@/constants';
import { usePreviousRender } from '@/hooks';
import { useAppSelector } from '@/store/store';
import { desmosButton } from '@/styles/mixins';

const Plot: FC = () => {
  const theme = useTheme();

  const isEvaluating = useAppSelector((state) => state.tabulation.isEvaluating);
  const results = useAppSelector((state) => state.tabulation.results);

  const prevEvaluatedAt = usePreviousRender(results?.evaluatedAt);

  const [calculator, setCalculator] = useState<Desmos.Calculator | null>(null);
  const renderDesmos = useCallback(
    (el: HTMLDivElement) => {
      if (el && !calculator) {
        const renderedCalculator = window.Desmos.GraphingCalculator(el, {
          expressions: false,
          keypad: false,
          settingsMenu: false,
        });
        renderedCalculator.setMathBounds({
          left: MAX_DIMENSIONS_BOUNDS,
          right: MAX_DIMENSIONS_BOUNDS,
        });
        renderedCalculator.removeExpression({ id: '1' }); // Clear state entirely

        setCalculator(renderedCalculator);
      }
    },
    [calculator],
  );

  useEffect(() => {
    if (!calculator) return;
    if (!results || results?.evaluatedAt === prevEvaluatedAt) return;

    const expressionId = 'tabulation-expression';
    calculator.removeExpression({ id: expressionId });
    calculator.setExpression({
      id: expressionId,
      type: 'table',
      columns: [
        {
          latex: 'x',
          values: results.x as any, // JS will auto convert to string
          dragMode: Desmos.DragModes.NONE,
          color: theme.palette.primary.main,
        },
        {
          latex: 'y',
          values: results.y as any, // JS will auto convert to string
          dragMode: Desmos.DragModes.NONE,
          color: theme.palette.primary.main,
        },
      ],
    });
  }, [calculator, prevEvaluatedAt, results, theme.palette.primary.main]);

  return <Box ref={renderDesmos} css={desmosStyle} flex={1} />;
};

const desmosStyle = (theme: Theme): SerializedStyles => css`
  .dcg-btn-flat-gray {
    ${desmosButton(theme)};

    .dcg-icon {
      opacity: 1;
      color: ${theme.palette.grey[200]};
    }
  }
`;

export default Plot;

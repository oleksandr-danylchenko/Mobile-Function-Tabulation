import { FC, useCallback, useEffect, useState } from 'react';

import { SerializedStyles } from '@emotion/react';
import { Box, css, Theme, useTheme } from '@mui/material';

import { MAX_X_BOUNDS, MAX_Y_BOUNDS, RENDER_POINTS_CAP } from '@/constants';
import { selectFunctionOption } from '@/store/slices/tabulationSlice';
import { useAppSelector } from '@/store/store';
import { desmosButton, fullParent } from '@/styles/mixins';

const Plot: FC = () => {
  const theme = useTheme();

  const functionOption = useAppSelector(selectFunctionOption);

  const results = useAppSelector((state) => state.tabulation.results);
  const [renderedEvaluatedAt, setRenderedEvaluatedAt] = useState<number>();

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
          top: MAX_Y_BOUNDS,
          bottom: MAX_Y_BOUNDS * -1,
          left: MAX_X_BOUNDS * -1,
          right: MAX_X_BOUNDS,
        });
        renderedCalculator.removeExpression({ id: '1' }); // Clear state entirely
        renderedCalculator.setBlank();

        setCalculator(renderedCalculator);
      }
    },
    [calculator],
  );

  useEffect(() => {
    if (!calculator) return;
    if (!results || results.evaluatedAt === renderedEvaluatedAt) return;

    const prevEvaluatedAt = renderedEvaluatedAt;
    setRenderedEvaluatedAt(results.evaluatedAt);

    const expressionId = `tabulation-expression-${results?.evaluatedAt}`;
    const pointsNum = results.x.length;
    calculator.setExpression(
      pointsNum > RENDER_POINTS_CAP // render approximation
        ? {
            id: expressionId,
            latex: functionOption.latex,
            color: theme.palette.primary.main,
          }
        : {
            id: expressionId,
            type: 'table',
            columns: [
              {
                latex: 'x',
                values: results.x,
                dragMode: Desmos.DragModes.NONE,
                color: theme.palette.primary.main,
                pointSize: '6.6',
              },
              {
                latex: 'y',
                values: results.y,
                dragMode: Desmos.DragModes.NONE,
                color: theme.palette.primary.main,
                pointSize: '6.6',
              },
            ],
          },
    );

    const prevExpressionId = `tabulation-expression-${prevEvaluatedAt}`;
    calculator.removeExpression({ id: prevExpressionId });
  }, [calculator, renderedEvaluatedAt, results, theme.palette.primary.main]);

  return <Box ref={renderDesmos} css={[desmosStyle, fullParent]} />;
};

const desmosStyle = (theme: Theme): SerializedStyles => css`
  .dcg-calculator-api-container .dcg-label {
    padding: ${theme.spacing(0.5)} ${theme.spacing(0.3)} !important;

    span {
      font-family: ${theme.typography.fontFamily} !important;
      font-size: 1rem;
    }
  }

  .dcg-btn-flat-gray {
    ${desmosButton(theme)};

    .dcg-icon {
      opacity: 1;
      color: ${theme.palette.grey[200]};
    }
  }
`;

export default Plot;

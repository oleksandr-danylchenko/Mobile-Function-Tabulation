import { FC } from 'react';
import {
  FormContainer,
  SelectElement,
  TextFieldElement,
  useForm,
} from 'react-hook-form-mui';

import { ClassNames, css } from '@emotion/react';
import { Stack } from '@mui/material';

import { MAX_X_BOUNDS } from '@/constants';
import { functionOptions } from '@/fixtures/functions';
import { TabulationControls } from '@/store/slices/tabulationSlice';
import { fullWidth } from '@/styles/mixins';

interface Props {
  defaultValues: TabulationControls;
  onFocus: () => void;
  onBlur: (newControls: TabulationControls) => void;
}

const ArgsControls: FC<Props> = (props) => {
  const { defaultValues, onFocus, onBlur } = props;

  const argsFormContext = useForm<TabulationControls>({
    defaultValues,
    mode: 'onBlur',
  });
  const { handleSubmit, watch } = argsFormContext;

  const xStartInputProps = {
    min: MAX_X_BOUNDS * -1,
    max: watch('xEnd'),
    step: 0.1,
  };
  const xEndInputProps = {
    min: watch('xStart'),
    max: MAX_X_BOUNDS,
    step: 0.1,
  };
  const stepInputProps = {
    min: 0.001,
    max: watch('xEnd') - watch('xStart'),
    step: 0.01,
  };

  return (
    <ClassNames>
      {({ css, theme }) => (
        <FormContainer
          formContext={argsFormContext}
          FormProps={{
            onFocus,
            onBlur: handleSubmit(onBlur), // Sends even only after successful validation
            className: css`
              display: flex;
              align-items: center;
              justify-content: center;
              gap: ${theme.spacing(2)};
              padding: ${theme.spacing(2)};
              background-color: ${theme.palette.primary.lighter};
            `,
          }}
        >
          <Stack css={fullWidth} gap={2}>
            <SelectElement
              css={inputStyle}
              name="funcKey"
              label="Formula"
              size="small"
              required
              options={functionOptions.map(({ key, label }) => ({
                id: key,
                label,
              }))}
              sx={{ minWidth: 140 }}
            />
            <Stack direction="row" gap={2}>
              <TextFieldElement
                css={inputStyle}
                name="xStart"
                label="X start"
                size="small"
                type="number"
                fullWidth
                required
                inputProps={xStartInputProps}
                validation={xStartInputProps}
              />
              <TextFieldElement
                css={inputStyle}
                name="xEnd"
                label="X end"
                size="small"
                type="number"
                fullWidth
                required
                inputProps={xEndInputProps}
                validation={xEndInputProps}
              />
              <TextFieldElement
                css={inputStyle}
                name="step"
                label="Step"
                size="small"
                type="number"
                fullWidth
                required
                inputProps={stepInputProps}
                validation={stepInputProps}
              />
            </Stack>
          </Stack>
        </FormContainer>
      )}
    </ClassNames>
  );
};

const inputStyle = css`
  &,
  input {
    text-align: center;
  }

  .MuiFormHelperText-root {
    display: none;
  }
`;

export default ArgsControls;

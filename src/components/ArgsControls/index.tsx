import { FC } from 'react';
import {
  FormContainer,
  SelectElement,
  TextFieldElement,
  useForm,
} from 'react-hook-form-mui';

import { ClassNames, css } from '@emotion/react';
import { Stack } from '@mui/material';

import { functionOptions } from '@/fixtures/functions';
import { reevaluateFunc } from '@/store/actions/tabulation';
import { TabulationControls } from '@/store/slices/tabulationSlice';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { fullWidth } from '@/styles/mixins';

const ArgsControls: FC = () => {
  const dispatch = useAppDispatch();
  const controls = useAppSelector((state) => state.tabulation.controls);
  const { xStart, xEnd } = controls;

  const argsFormContext = useForm<TabulationControls>({
    defaultValues: controls,
    mode: 'onBlur',
  });
  const { handleSubmit } = argsFormContext;
  const handleFormBlur = (data: TabulationControls): void => {
    dispatch(reevaluateFunc(data));
  };

  const xStartInputProps = { min: -10000, max: xEnd, step: 0.1 };
  const xEndInputProps = { min: xStart, max: 10000, step: 0.1 };
  const stepInputProps = { min: 0.0001, max: xEnd - xStart, step: 0.01 };

  return (
    <ClassNames>
      {({ css, theme }) => (
        <FormContainer
          formContext={argsFormContext}
          FormProps={{
            onBlur: handleSubmit(handleFormBlur), // Sends even only after successful validation
            className: css`
              display: flex;
              align-items: center;
              justify-content: center;
              gap: ${theme.spacing(2)};
              padding: ${theme.spacing(2)};
              background-color: ${theme.palette.primary.light};
              border-top-left-radius: ${theme.spacing(2.2)};
              border-top-right-radius: ${theme.spacing(2.2)};
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

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

const ArgsControls: FC = () => {
  const dispatch = useAppDispatch();
  const controls = useAppSelector((state) => state.tabulation.controls);

  const argsFormContext = useForm<TabulationControls>({
    defaultValues: controls,
    mode: 'onBlur',
  });
  const { handleSubmit } = argsFormContext;
  const handleFormBlur = (data: TabulationControls): void => {
    dispatch(reevaluateFunc(data));
  };

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
          <Stack gap={2}>
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
                required
              />
              <TextFieldElement
                css={inputStyle}
                name="xEnd"
                label="X end"
                size="small"
                type="number"
                required
              />
              <TextFieldElement
                css={inputStyle}
                name="step"
                label="Step"
                size="small"
                type="number"
                required
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

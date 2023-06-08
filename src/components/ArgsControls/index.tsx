import { FC } from 'react';
import {
  FormContainer,
  SelectElement,
  TextFieldElement,
  useForm,
} from 'react-hook-form-mui';

import { ClassNames, css } from '@emotion/react';

import { functionOptions } from '@/fixtures/functions';
import {
  selectArgsControls,
  setTabulationArgs,
  TabulationState,
} from '@/store/slices/tabulationSlice';
import { useAppDispatch, useAppSelector } from '@/store/store';

export type ArgsControlsForm = Pick<
  TabulationState,
  'xStart' | 'xEnd' | 'funcKey'
>;

const ArgsControls: FC = () => {
  const dispatch = useAppDispatch();
  const argsControls = useAppSelector(selectArgsControls);

  const argsFormContext = useForm<ArgsControlsForm>({
    defaultValues: argsControls,
    mode: 'onBlur',
  });
  const { handleSubmit } = argsFormContext;
  const handleFormBlur = (data: ArgsControlsForm): void => {
    dispatch(setTabulationArgs(data));
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

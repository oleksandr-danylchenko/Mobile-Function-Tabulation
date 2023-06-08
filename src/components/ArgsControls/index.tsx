import { ChangeEvent, FC, useCallback } from 'react';
import {
  FormContainer,
  SelectElement,
  TextFieldElement,
  useForm,
} from 'react-hook-form-mui';

import { ClassNames, css } from '@emotion/react';
import { debounce } from '@mui/material';

import { FunctionKey, functionOptions } from '@/fixtures/functions';
import { setX } from '@/store/slices/tabulationSlice';
import { useAppDispatch } from '@/store/store';

interface ArgsControlsProps {
  xStart: string;
  xEnd: string;
  funcKey: FunctionKey;
}

const ArgsControls: FC = () => {
  const dispatch = useAppDispatch();

  const argsFormContext = useForm<ArgsControlsProps>({
    defaultValues: { xStart: '-1', xEnd: '1', funcKey: FunctionKey.X_SQUARED },
    mode: 'onBlur',
  });
  const { watch } = argsFormContext;

  const handleXChange = useCallback(
    (prop: 'xStart' | 'xEnd') =>
      debounce((event: ChangeEvent<HTMLInputElement>): void => {
        const value = event.target.value;
        dispatch(setX(prop === 'xStart' ? { start: value } : { end: value }));
      }, 250),
    [dispatch],
  );

  return (
    <ClassNames>
      {({ css, theme }) => (
        <FormContainer
          formContext={argsFormContext}
          FormProps={{
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
            defaultValue="-1"
            size="small"
            type="number"
            required
          />
          <TextFieldElement
            css={inputStyle}
            name="xEnd"
            label="X end"
            defaultValue="1"
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

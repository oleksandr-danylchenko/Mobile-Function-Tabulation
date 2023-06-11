import { FC, PropsWithChildren } from 'react';

import { Stack } from '@mui/material';

const StaticButtonsContainer: FC<PropsWithChildren> = (props) => (
  <Stack position="absolute" left={10} top={10} gap={1.5} zIndex={2}>
    {props.children}
  </Stack>
);

export default StaticButtonsContainer;

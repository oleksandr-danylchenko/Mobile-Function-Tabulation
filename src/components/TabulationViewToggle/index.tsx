import { FC } from 'react';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Button } from '@mui/material';

import { useAppDispatch } from '@/store/store';
import { desmosButton } from '@/styles/mixins';

const TabulationViewToggle: FC = () => {
  const dispatch = useAppDispatch();

  const handleViewToggle = () => {
    console.log('gg');
  };

  return (
    <Button
      css={desmosButton}
      aria-label="Show author info"
      color="inherit"
      onClick={handleViewToggle}
    >
      <AccountCircleIcon fontSize="small" width={16} height={16} />
    </Button>
  );
};

export default TabulationViewToggle;

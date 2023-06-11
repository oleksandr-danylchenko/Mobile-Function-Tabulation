import { FC } from 'react';

import TableChartIcon from '@mui/icons-material/TableChart';
import TimelineIcon from '@mui/icons-material/Timeline';
import { Button } from '@mui/material';

import { TabulationView, toggleView } from '@/store/slices/uiSlice';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { desmosButton } from '@/styles/mixins';

const TabulationViewToggle: FC = () => {
  const dispatch = useAppDispatch();

  const tabulationView = useAppSelector((state) => state.ui.tabulationView);

  const handleViewToggle = (): void => {
    dispatch(toggleView());
  };

  const Icon =
    tabulationView === TabulationView.PLOT ? TableChartIcon : TimelineIcon;
  return (
    <Button
      css={desmosButton}
      aria-label="Show author info"
      color="inherit"
      onClick={handleViewToggle}
    >
      <Icon fontSize="small" width={16} height={16} />
    </Button>
  );
};

export default TabulationViewToggle;

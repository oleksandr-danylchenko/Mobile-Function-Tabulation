import { FC, PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
  isEditing: boolean;
  isEvaluating: boolean;
}

const PlotOverlay: FC<Props> = (props) => {
  const { isEditing, isEvaluating, children } = props;
  return <>{children}</>;
};

export default PlotOverlay;

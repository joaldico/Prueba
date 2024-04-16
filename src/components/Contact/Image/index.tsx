import React, { FC } from 'react';

import { ImageStyles } from './styles';

type Props = React.ComponentPropsWithoutRef<'img'> & { maxWidth?: string | number };
export const Image: FC<Props> = (props) => {
  return <ImageStyles {...props} />;
};

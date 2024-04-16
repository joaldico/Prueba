import { BoxProps } from '@mui/material';
import { FC } from 'react';

import { BoxStyled } from './styles';

type Props = BoxProps;

export const CustomBox: FC<Props> = ({ children, px = 2, py = 2, ...rest }) => {
  return (
    <BoxStyled px={px} py={py} {...rest}>
      {children}
    </BoxStyled>
  );
};

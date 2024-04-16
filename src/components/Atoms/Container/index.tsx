import { ContainerProps } from '@mui/material';
import { FC } from 'react';

import { ContainerStyled } from './styles';

type Props = ContainerProps;
export const CustomContainer: FC<Props> = ({ children, ...rest }) => {
  return <ContainerStyled {...rest}>{children}</ContainerStyled>;
};

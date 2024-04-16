import { styled } from '@mui/material/styles';
import { ComponentPropsWithoutRef } from 'react';

export const ImageStyles = styled('img')<
  {
    width?: string | number;
    maxWidth?: string | number;
    cursor?: string;
  } & ComponentPropsWithoutRef<'img'>
>`
  width: ${({ width }) => width};
  max-width: ${({ maxWidth }) => maxWidth};
  cursor: ${({ className }) => className};
`;

ImageStyles.defaultProps = {
  width: 'auto',
  maxWidth: '100%',
  cursor: 'auto',
};

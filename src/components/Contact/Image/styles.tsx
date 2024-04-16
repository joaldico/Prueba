import { styled } from '@mui/material/styles';
import { ComponentPropsWithoutRef } from 'react';

export const ImageStyles = styled('img')<
  { width?: string | number; maxWidth?: string | number } & ComponentPropsWithoutRef<'img'>
>`
  width: ${({ width }) => width};
  max-width: ${({ maxWidth }) => maxWidth};
`;

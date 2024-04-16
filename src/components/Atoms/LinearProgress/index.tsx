import { Box, LinearProgress } from '@mui/material';
import { FC } from 'react';

export const LinearProgressFixed: FC = () => {
  return (
    <Box position={'absolute'} top={0} left={0} width={'100%'}>
      <LinearProgress />
    </Box>
  );
};

import { Box, BoxProps, Grid, Typography } from '@mui/material';
import { FC } from 'react';

import { useStyles } from './styles';
type Props = BoxProps & { data: { key: string; value: string | number }[] };
export const PaymentData: FC<Props> = ({ data, py = 2, ...rest }) => {
  const isNumberPayment = (key: string) => key === 'No. de comprobante';
  const classes = useStyles();
  return (
    <Box py={py} {...rest}>
      <Grid container spacing={1}>
        {data.map(({ key, value }) => (
          <>
            <Grid item xs={6} sm={5} md={4}>
              <Typography
                display={'inline-block'}
                style={{ wordWrap: 'break-word' }}
                width={'100%'}
                variant={'body2'}
                color={'rgba(0, 0, 0, 0.87)'}
                fontWeight={'bold'}
              >
                {key}:
              </Typography>
            </Grid>
            <Grid display={'flex'} item xs={6} sm={7} md={8}>
              <Typography
                display={'inline-block'}
                style={{ wordWrap: 'break-word' }}
                width={'100%'}
                variant={'body2'}
                color={'rgba(0, 0, 0, 0.87)'}
              >
                {value}
              </Typography>
            </Grid>
          </>
        ))}
      </Grid>
    </Box>
  );
};

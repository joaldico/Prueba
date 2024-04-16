import { Box, CircularProgress, Grid, Paper } from '@mui/material';
import React, { FC, useEffect, useState } from 'react';

import { useStyles } from './styles';

type CardUITProps = {
  onLoadData?: any;
  children?: any;
};

export const CardUIT: FC<CardUITProps> = ({ onLoadData, children }) => {
  const classes = useStyles();

  const [loading, setLoading] = useState(true);

  const initialize = () => {
    if (onLoadData) onLoadData(setLoading);
    else {
      setTimeout(() => {
        setLoading(false);
      }, 1000 * 1.5);
    }
  };

  useEffect(() => {
    initialize();
  }, []);

  return (
    <Paper className={classes.card}>
      {loading ? (
        <Grid container className={classes.loading}>
          <Box display={'flex'} width={'100%'} alignItems={'center'} justifyContent={'center'}>
            <CircularProgress />
          </Box>
        </Grid>
      ) : (
        <Box className={classes.cardBody}>
          <React.Fragment>{children}</React.Fragment>
        </Box>
      )}
    </Paper>
  );
};

export default CardUIT;

import { CircularProgress } from '@mui/material';
import { FC } from 'react';

import { useStyles } from './styles';

const Spinner: FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <CircularProgress className={classes.progress} />
    </div>
  );
};

export default Spinner;

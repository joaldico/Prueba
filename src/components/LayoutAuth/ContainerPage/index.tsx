import { FC } from 'react';

import { LOGIN_IMAGE } from '../../../constants/constants';
import { useStyles } from './styles';

const ContainerPage: FC = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.leftColumn}>{children}</div>
      <div className={classes.rightColumn} style={{ backgroundImage: `url(${LOGIN_IMAGE})` }} />
    </div>
  );
};

export default ContainerPage;

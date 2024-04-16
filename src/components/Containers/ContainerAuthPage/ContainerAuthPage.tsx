import { FC } from 'react';

import { useStyles } from './styles';

const ContainerAuthPage: FC = ({ children }) => {
  const classes = useStyles();
  return <div className={classes.root}>{children}</div>;
};

export default ContainerAuthPage;

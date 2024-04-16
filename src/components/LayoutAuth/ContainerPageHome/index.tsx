import { FC } from 'react';

import { useStyles } from './styles';

const ContainerPageHome: FC = ({ children }) => {
  const classes = useStyles();
  return <div className={classes.root}>{children}</div>;
};

export default ContainerPageHome;

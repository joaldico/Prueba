import { FC } from 'react';

import Footer from './Footer/index';
import Header from './Header/index';
import { useStyles } from './styles';

const ContainerPageContact: FC = ({ children }) => {
  const classes = useStyles();

  return (
    <>
      <Header />
      <div className={classes.root}>{children}</div>
      <Footer />
    </>
  );
};

export default ContainerPageContact;

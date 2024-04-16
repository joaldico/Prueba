import { useContext } from 'react';

import BusinessUnitParamsContext from '../../../contexts/BusinessUnitParamsContext/businessUnitParamsContext';
import { useStyles } from './styles';

const HeaderLogo = () => {
  const { logoHorizontalUrl } = useContext(BusinessUnitParamsContext);
  const classes = useStyles();

  const goToHome = () => {
    window.location.replace('/');
  };

  return (
    <img
      className={classes.logo}
      src={logoHorizontalUrl}
      alt={'Business-logo'}
      onClick={goToHome}
    />
  );
};

export default HeaderLogo;

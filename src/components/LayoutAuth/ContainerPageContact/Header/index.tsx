import { Box } from '@mui/material';
import { useContext } from 'react';

import BusinessUnitParamsContext from '../../../../contexts/BusinessUnitParamsContext/businessUnitParamsContext';
import { useStyles } from './styles';

const Header = () => {
  const classes = useStyles();
  const { logoUrl } = useContext(BusinessUnitParamsContext);

  const goToHome = () => {
    window.location.replace('/');
  };

  return (
    <Box className={classes.root}>
      <img className={classes.logo} src={logoUrl} alt={'Business-logo'} onClick={goToHome} />
    </Box>
  );
};

export default Header;

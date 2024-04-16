import { Box, Typography } from '@mui/material';
import classNames from 'classnames';
import { useContext } from 'react';
import { useTranslation } from 'react-i18next';

import BusinessUnitParamsContext from '../../../contexts/BusinessUnitParamsContext/businessUnitParamsContext';
import { isEmpty } from '../../../util/commons';
import { useStyles } from './styles';

const Header = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const { logoUrl, name } = useContext(BusinessUnitParamsContext);

  const goToHome = () => {
    window.location.replace('/');
  };

  const showNameMobile = () => {
    return name && name?.length <= 20;
  };

  return (
    <Box className={classes.root}>
      {isEmpty(logoUrl) ? (
        <Typography className={classNames(classes.title, !showNameMobile() && classes.titleMobile)}>
          {t('Servicio de asistencia')}
        </Typography>
      ) : (
        <img className={classes.logo} src={logoUrl} alt={'Business-logo'} onClick={goToHome} />
      )}
      <Typography className={classNames(classes.title, !showNameMobile() && classes.titleMobile)}>
        {name}
      </Typography>
      <div className={classes.grow} />
    </Box>
  );
};

export default Header;

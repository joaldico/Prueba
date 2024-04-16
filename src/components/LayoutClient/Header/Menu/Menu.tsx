import { Link } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { HOME } from '../../../../constants/routes';
import { useStyles } from './styles';

const Menu = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <div className={classes.linkContainer}>
      <Link className={classes.link} underline="hover" href={HOME}>
        {t('Inicio')}
      </Link>
      <Link className={classes.link} underline={'hover'} href={'#'}>
        {t('Mis asistencias')}
      </Link>
    </div>
  );
};

export default Menu;

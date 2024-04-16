import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Breadcrumbs, Link, Typography } from '@mui/material';
import { SyntheticEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { getAppSelector } from '../../redux/selectors';
import { useStyles } from './styles';

function CustomBreadcumbs(): JSX.Element {
  const classes = useStyles();
  const history = useHistory();
  const { t } = useTranslation();
  const { currentViewName, currentViewLink } = useSelector(getAppSelector);

  const goToHome = (event: SyntheticEvent) => {
    event.preventDefault();
    history.push({ pathname: '/' });
  };

  const goToCurrentView = (event: SyntheticEvent) => {
    event.preventDefault();
    history.push({ pathname: currentViewLink });
  };

  return (
    <div className={classes.root}>
      <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
        <Link underline="none" className={classes.text} color="inherit" onClick={goToHome}>
          {t('Inicio')}
        </Link>
        <Link underline="none" className={classes.text2} color="inherit" onClick={goToCurrentView}>
          {currentViewName}
        </Link>
      </Breadcrumbs>
      <Typography className={classes.title} color="textPrimary">
        {currentViewName}
      </Typography>
    </div>
  );
}

export default CustomBreadcumbs;

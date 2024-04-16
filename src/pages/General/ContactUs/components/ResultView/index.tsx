import { Button, Grid, Typography } from '@mui/material';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Image } from '../../../../../components/Atoms/Image';
import errorImage from '../../assets/error.svg';
import errorMobile from '../../assets/error-mobile.svg';
import successImage from '../../assets/success.svg';
import successMobile from '../../assets/success-mobile.svg';
import { useStyles } from './styles';

type ResultViewProps = {
  result: boolean;
  handleGoBack: CallableFunction;
  handleGoHome: CallableFunction;
  handleTryAgain: CallableFunction;
};

const ResultView: FC<ResultViewProps> = ({
  result,
  handleGoBack,
  handleGoHome,
  handleTryAgain,
}) => {
  const classes = useStyles();
  const { t } = useTranslation();

  const handleBodyResult = () => {
    if (result) {
      return (
        <>
          {t('Tu mensaje se ha enviado correctamente.')}
          <br />
          {t('Te responderemos lo antes posible')}
        </>
      );
    }
    return <>{t('Se ha producido un error al enviar tu mensaje. Inténtalo de nuevo.')}</>;
  };

  const handleTitleResult = () => {
    if (result) {
      return t('¡Gracias!');
    }
    return t('Error :(');
  };

  return (
    <Grid container spacing={0}>
      <Grid item xs={12} sm={12} className={classes.imageMobile}>
        <Image src={result ? successMobile : errorMobile} width={'auto'} />
      </Grid>
      <Grid item xs={12} sm={12} className={classes.imageDesktop}>
        <Image src={result ? successImage : errorImage} width={'auto'} />
      </Grid>
      <Grid item xs={12} sm={12} className={classes.titleContainer}>
        <Typography variant={'h2'} className={classes.title}>
          {handleTitleResult()}
        </Typography>
      </Grid>
      <Grid item xs={12} sm={12} className={classes.bodyContainer}>
        <Typography variant={'body1'} className={classes.body}>
          {handleBodyResult()}
        </Typography>
      </Grid>
      <Grid container>
        <Grid item xs={12} sm={9} md={10} className={classes.buttonLeftContainer}>
          <Button
            className={classes.buttonLeft}
            variant="outlined"
            size="medium"
            onClick={() => (result ? handleGoBack(true) : handleGoHome())}
          >
            {result ? t('Cancelar') : t('Inicio')}
          </Button>
        </Grid>
        <Grid item xs={12} sm={3} md={2} className={classes.buttonRightContainer}>
          <Button
            className={classes.button}
            variant="contained"
            size="medium"
            onClick={() => (result ? handleGoHome() : handleTryAgain())}
          >
            {result ? t('Inicio') : t('Reintentar')}
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ResultView;

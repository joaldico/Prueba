import { Button, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { useHistory } from 'react-router-dom';

import DevelopedBySection from '../../../../components/LayoutAuth/DevelopedBySection';
import HeaderLogo from '../../../../components/LayoutAuth/HeaderLogo';
import HelpSection from '../../../../components/LayoutAuth/HelpSection';
import { LOGIN } from '../../../../constants/routes';
import { getValidateAccountSelector } from '../../../../redux/selectors';
import { useStyles } from './styles';

const ValidateAccountForm = () => {
  const classes = useStyles();
  const history = useHistory();
  const { email, tokenExpirationTime } = useSelector(getValidateAccountSelector);

  const goToRequestAccount = () => {
    history.push({ pathname: LOGIN });
  };

  if (email && tokenExpirationTime) {
    return (
      <>
        <HeaderLogo />

        <div className={classes.containerTitle}>
          <Typography className={classes.title}>{'Solicita una cuenta'}</Typography>
          <Typography className={classes.subTitle}>
            {`Se ha enviado un correo para crear y activar la cuenta a ${email} asociado a los datos de identificación entregados.`}
          </Typography>
          <Typography className={classes.subTitle}>
            {`Tienes ${tokenExpirationTime} minutos para realizar la activación de tu cuenta, de lo contrario deberás hacer una nueva solicitud.`}
          </Typography>
          <Typography className={classes.subTitle}>
            {
              'Si deseas cambiar el correo electrónico asociado, puedes contactarnos al número inferior en pantalla.'
            }
          </Typography>

          <Button
            className={classes.button}
            variant="contained"
            size="medium"
            onClick={goToRequestAccount}
          >
            {'Volver al inicio'}
          </Button>
        </div>

        <HelpSection />

        <DevelopedBySection />
      </>
    );
  } else {
    return <Redirect to={LOGIN} />;
  }
};

export default ValidateAccountForm;

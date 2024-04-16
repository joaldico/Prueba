import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import { AlertColor, Button, Grid, Typography } from '@mui/material';
import { useContext, useState } from 'react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

import { resetPasswordWithToken } from '../../../../api/api';
import InputTextController from '../../../../components/Atoms/InputTextController';
import { SimpleAlert } from '../../../../components/Atoms/SimpleAlert';
import DevelopedBySection from '../../../../components/LayoutAuth/DevelopedBySection';
import HeaderLogo from '../../../../components/LayoutAuth/HeaderLogo';
import HelpSection from '../../../../components/LayoutAuth/HelpSection';
import { LOGIN } from '../../../../constants/routes';
import BusinessUnitParamsContext from '../../../../contexts/BusinessUnitParamsContext/businessUnitParamsContext';
import { useStyles } from '../../../../styles/global/stylesLogin';
import { setEmailToResetPassword } from '../../../../util/LocalStorage/resetPassword';

type FormInputs = {
  email: string;
};

const ResetPasswordForm = () => {
  const { businessUnitUUID } = useContext(BusinessUnitParamsContext);
  const { executeRecaptcha } = useGoogleReCaptcha();
  const classes = useStyles();
  const history = useHistory();

  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState<AlertColor>('success');
  const [alertMessage, setAlertMessage] = useState('');

  const { control, handleSubmit } = useForm<FormInputs>({
    mode: 'all',
  });

  const onSubmit = async (data: FormInputs) => {
    setShowAlert(false);
    if (!executeRecaptcha) return console.info('Execute recaptcha not yet available');

    if (data.email != '') {
      const captcha = await executeRecaptcha('submit');

      try {
        const response = await resetPasswordWithToken(captcha, businessUnitUUID, data.email);
        if (response && response.expiresInMinutes) {
          setShowAlert(true);
          setAlertType('success');
          setAlertMessage('Se envió un enlace de recuperación al correo electrónico ingresado.');
          setEmailToResetPassword(data.email);
        } else {
          setShowAlert(true);
          setAlertType('error');
          setAlertMessage('No hay ningún usuario asociado con ese correo electrónico.');
        }
      } catch (error: any) {
        setShowAlert(true);
        setAlertType('error');
        setAlertMessage(error.response.data.message);
        console.error(error);
      }
    }
  };

  const onError = () => {
    console.error('onError');
  };

  const goToLogin = () => {
    history.push({ pathname: LOGIN });
  };

  return (
    <>
      <HeaderLogo />

      <div className={classes.containerTitle}>
        <div className={classes.containerIcon}>
          <ArrowLeftOutlinedIcon className={classes.icon} onClick={goToLogin} />
          <Typography className={classes.title}>{'Modificar contraseña'}</Typography>
        </div>
        <Typography className={classes.description}>
          {'Ingrese la dirección de correo electrónico que está asociada a su cuenta'}
        </Typography>
      </div>

      <div className={classes.containerForm}>
        <form onSubmit={handleSubmit(onSubmit, onError)} autoComplete="off">
          <Grid container rowSpacing={2} columnSpacing={5}>
            <Grid item xs={12}>
              <InputTextController
                name={'email'}
                label={'Correo electrónico'}
                placeholder={'Correo electrónico'}
                control={control}
                type={'email'}
                minLength={1}
                required={true}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                className={classes.button}
                variant="contained"
                size="medium"
                type="submit"
                onSubmit={handleSubmit(onSubmit, onError)}
              >
                {'Recuperar contraseña'}
              </Button>
            </Grid>
          </Grid>
        </form>

        {showAlert && (
          <div className={classes.containerAlert}>
            <SimpleAlert fullWidth text={alertMessage} type={alertType} />
          </div>
        )}
      </div>

      <div className={classes.containerForm}>
        <HelpSection />
      </div>

      <DevelopedBySection />
    </>
  );
};

export default ResetPasswordForm;

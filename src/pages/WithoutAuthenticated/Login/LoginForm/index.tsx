import { AlertColor, Button, Divider, Grid, Link, Typography } from '@mui/material';
import { useContext, useState } from 'react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

import { login } from '../../../../api/api';
import InputTextController from '../../../../components/Atoms/InputTextController';
import { SimpleAlert } from '../../../../components/Atoms/SimpleAlert';
import DevelopedBySection from '../../../../components/LayoutAuth/DevelopedBySection';
import HeaderLogo from '../../../../components/LayoutAuth/HeaderLogo';
import HelpSection from '../../../../components/LayoutAuth/HelpSection';
import { REQUEST_ACCOUNT, RESET_PASSWORD } from '../../../../constants/routes';
import BusinessUnitParamsContext from '../../../../contexts/BusinessUnitParamsContext/businessUnitParamsContext';
import { useStyles as useStylesLogin } from '../../../../styles/global/stylesLogin';
import { isEmpty } from '../../../../util/commons';
import { setSessionInfo } from '../../../../util/LocalStorage/login';
import { useStyles } from './styles';

type FormInputs = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const { businessUnitUUID } = useContext(BusinessUnitParamsContext);
  const { executeRecaptcha } = useGoogleReCaptcha();
  const classes = useStyles();
  const classesLogin = useStylesLogin();
  const history = useHistory();

  const [showPassword, setShowPassword] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState<AlertColor>('success');
  const [alertMessage, setAlertMessage] = useState('');

  const { control, handleSubmit } = useForm<FormInputs>({
    mode: 'all',
  });

  const onSubmit = async (data: FormInputs) => {
    setShowAlert(false);
    if (!executeRecaptcha) return console.info('Execute recaptcha not yet available');
    const captcha = await executeRecaptcha('submit');
    await login(captcha, businessUnitUUID, data.email, data.password)
      .then((response) => {
        if (!isEmpty(response.token)) {
          setSessionInfo(response, businessUnitUUID);
          setTimeout(() => {
            location.reload();
          }, 1000);
        }
      })
      .catch(() => {
        onError();
      });
  };

  const onError = () => {
    setShowAlert(true);
    setAlertType('error');
    setAlertMessage('El usuario o la contraseña no son válidos.');
  };

  const goToResetPassword = () => {
    history.push({ pathname: RESET_PASSWORD });
  };

  const goToRequestAccount = () => {
    history.push({ pathname: REQUEST_ACCOUNT });
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <HeaderLogo />

      <div className={classes.containerTitle}>
        <Typography className={classes.title}>{'Inicia sesión'}</Typography>
        <Typography className={classes.description}>{'Accede a tu sucursal virtual'}</Typography>
      </div>

      <div className={classes.containerForm}>
        <form onSubmit={handleSubmit(onSubmit, onError)} autoComplete="off">
          <input className={classes.fakeStyle} type="text" name="fakeuser" />
          <input className={classes.fakeStyle} type="password" name="fakepassword" />
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
              <InputTextController
                name={'password'}
                label={'Contraseña'}
                placeholder={'Contraseña'}
                control={control}
                type={'password'}
                minLength={1}
                required={true}
                showPassword={showPassword}
                handleClickShowPassword={handleClickShowPassword}
              />
            </Grid>
            <Grid item xs={12} className={classes.containerLink}>
              <Link
                underline="none"
                className={classes.link}
                color="inherit"
                onClick={goToResetPassword}
              >
                {'Olvidé mi contraseña'}
              </Link>
            </Grid>
            <Grid item xs={12}>
              <Button
                className={classes.button}
                variant="contained"
                size="medium"
                type="submit"
                onSubmit={handleSubmit(onSubmit, onError)}
              >
                {'Iniciar sesión'}
              </Button>
            </Grid>
          </Grid>
        </form>

        {showAlert && (
          <div className={classesLogin.containerAlert}>
            <SimpleAlert fullWidth text={alertMessage} type={alertType} />
          </div>
        )}
      </div>

      <div className={classes.containerForm}>
        <Divider className={classes.divider} />

        <div className={classes.containerCreateUser}>
          <Typography className={classes.description}>{'¿Aún no eres usuario?'}</Typography>
          <Grid item xs={12}>
            <Button
              className={classes.buttonOutlined}
              variant="outlined"
              size="medium"
              onClick={goToRequestAccount}
            >
              {'Solicitar cuenta'}
            </Button>
          </Grid>

          <HelpSection withPaddingBottom={false} />
        </div>
      </div>

      <DevelopedBySection />
    </>
  );
};

export default LoginForm;

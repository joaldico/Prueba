import { AlertColor, Typography } from '@mui/material';
import queryString from 'query-string';
import { useContext, useState } from 'react';
import { Redirect } from 'react-router';

import { changePasswordWithToken } from '../../../../api/api';
import PasswordRequirements from '../../../../components/Atoms/CustomMessage/PasswordRequirements';
import { SimpleAlert } from '../../../../components/Atoms/SimpleAlert';
import DevelopedBySection from '../../../../components/LayoutAuth/DevelopedBySection';
import PasswordForm from '../../../../components/LayoutAuth/Forms/PasswordForm';
import HeaderLogo from '../../../../components/LayoutAuth/HeaderLogo';
import HelpSection from '../../../../components/LayoutAuth/HelpSection';
import { LOGIN } from '../../../../constants/routes';
import BusinessUnitParamsContext from '../../../../contexts/BusinessUnitParamsContext/businessUnitParamsContext';
import { useStyles } from '../../../../styles/global/stylesLogin';
import { isValidPassword } from '../../../../util/commons';
import { setSessionInfo } from '../../../../util/LocalStorage/login';
import { getEmailToResetPassword } from '../../../../util/LocalStorage/resetPassword';

type FormInputs = {
  email: string;
  password: string;
  confirmPassword: string;
};

const ChangePasswordForm = () => {
  const { token } = queryString.parse(location.search);
  const { businessUnitUUID } = useContext(BusinessUnitParamsContext);
  const classes = useStyles();

  const [showAlert, setShowAlert] = useState(false);
  const [showInputError, setShowInputError] = useState(false);
  const [alertType, setAlertType] = useState<AlertColor>('success');
  const [alertMessage, setAlertMessage] = useState('');

  const emailToResetPassword = getEmailToResetPassword();

  const onSubmit = async (data: FormInputs) => {
    setShowAlert(false);
    setShowInputError(false);
    if (data.password != '' && data.confirmPassword != '') {
      try {
        if (data.password && isValidPassword(data.password)) {
          if (data.password === data.confirmPassword) {
            const response = await changePasswordWithToken(token, businessUnitUUID, data.password);
            setSessionInfo(response, businessUnitUUID);
            setTimeout(() => {
              location.reload();
            }, 1000);
          } else {
            setMessageError('Las contraseñas no coinciden. Inténtalo nuevamente');
          }
        } else {
          setShowInputError(true);
          setMessageError(<PasswordRequirements />);
        }
      } catch (error: any) {
        setMessageError(error.response.data.message);
        console.error(error);
      }
    }
  };

  const setMessageError = (message: any) => {
    setShowAlert(true);
    setAlertType('error');
    setAlertMessage(message);
  };

  const onError = () => {
    console.error('onError');
  };

  if (token) {
    return (
      <>
        <HeaderLogo />

        <div className={classes.containerTitle}>
          <Typography className={classes.title}>{'Cambio de contraseña'}</Typography>
          <Typography className={classes.description}>{'Ingrese una nueva contraseña'}</Typography>
        </div>

        <div className={classes.containerForm}>
          <PasswordForm
            email={emailToResetPassword}
            buttonText={'Guardar cambios e iniciar sesión'}
            onSubmit={onSubmit}
            onError={onError}
            showInputError={showInputError}
          />

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
  } else {
    return <Redirect to={LOGIN} />;
  }
};

export default ChangePasswordForm;

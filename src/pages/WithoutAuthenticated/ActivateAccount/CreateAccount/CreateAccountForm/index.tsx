import { AlertColor, Typography } from '@mui/material';
import { FC, useContext, useState } from 'react';

import { createAccount } from '../../../../../api/api';
import PasswordRequirements from '../../../../../components/Atoms/CustomMessage/PasswordRequirements';
import RecoverPassword from '../../../../../components/Atoms/CustomMessage/RecoverPassword';
import { SimpleAlert } from '../../../../../components/Atoms/SimpleAlert';
import DevelopedBySection from '../../../../../components/LayoutAuth/DevelopedBySection';
import PasswordForm from '../../../../../components/LayoutAuth/Forms/PasswordForm';
import HeaderLogo from '../../../../../components/LayoutAuth/HeaderLogo';
import HelpSection from '../../../../../components/LayoutAuth/HelpSection';
import BusinessUnitParamsContext from '../../../../../contexts/BusinessUnitParamsContext/businessUnitParamsContext';
import { useStyles } from '../../../../../styles/global/stylesLogin';
import { isEmpty, isValidPassword } from '../../../../../util/commons';
import { setSessionInfo } from '../../../../../util/LocalStorage/login';

type FormInputs = {
  email: string;
  password: string;
  confirmPassword: string;
};

type Props = {
  emailToCreate: string;
  tokenToCreateAccount: string | string[] | null;
};

const CreateAccountForm: FC<Props> = ({ emailToCreate, tokenToCreateAccount }) => {
  const { businessUnitUUID } = useContext(BusinessUnitParamsContext);
  const classes = useStyles();

  const [showAlert, setShowAlert] = useState(false);
  const [showInputError, setShowInputError] = useState(false);
  const [alertType, setAlertType] = useState<AlertColor>('success');
  const [alertMessage, setAlertMessage] = useState('');
  const [disabledButton, setDisabledButton] = useState(false);

  const onSubmit = async (data: FormInputs) => {
    setShowAlert(false);
    setShowInputError(false);
    if (data.email != '' && data.password != '' && data.confirmPassword != '') {
      try {
        if (data.password && isValidPassword(data.password)) {
          setDisabledButton(true);
          if (data.password === data.confirmPassword) {
            const response = await createAccount(
              tokenToCreateAccount,
              businessUnitUUID,
              data.password
            );
            if (!isEmpty(response.accessToken)) {
              setSessionInfo({ token: response.accessToken }, businessUnitUUID);
              setTimeout(() => {
                location.reload();
              }, 1000);
            }
          } else {
            setMessageError('Las contraseñas no coinciden. Inténtalo nuevamente');
          }
        } else {
          setShowInputError(true);
          setMessageError(<PasswordRequirements />);
        }
      } catch (error: any) {
        setDisabledButton(false);
        if (error.response.data.message === 'Usuario Existente') {
          setMessageAlert(<RecoverPassword />);
        } else {
          setMessageError('Ha ocurrido un error a procesar la solicitud, Inténtalo más tarde.');
        }
        console.error(error);
      }
    }
  };

  const setMessageAlert = (message: any) => {
    setShowAlert(true);
    setAlertType('warning');
    setAlertMessage(message);
  };

  const setMessageError = (message: any) => {
    setShowAlert(true);
    setAlertType('error');
    setAlertMessage(message);
  };

  const onError = () => {
    console.error('onError');
  };

  return (
    <>
      <HeaderLogo />

      <div className={classes.containerTitle}>
        <Typography className={classes.title}>{'Crear cuenta'}</Typography>
        <Typography className={classes.description}>
          {'Rellena los campos para crear una cuenta e iniciar sesión'}
        </Typography>
      </div>

      <div className={classes.containerForm}>
        <PasswordForm
          email={emailToCreate}
          buttonText={'Crear cuenta e iniciar sesión'}
          onSubmit={onSubmit}
          onError={onError}
          showInputError={showInputError}
          disabledButton={disabledButton}
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
};

export default CreateAccountForm;

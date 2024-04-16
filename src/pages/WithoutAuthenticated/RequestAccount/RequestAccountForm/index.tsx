import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import { AlertColor, Button, Grid, Typography } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { validate as validateRut } from 'rut.js';

import { getIdentificationTypes, validateClient } from '../../../../api/api';
import RecoverPassword from '../../../../components/Atoms/CustomMessage/RecoverPassword';
import InputTextController from '../../../../components/Atoms/InputTextController';
import Select from '../../../../components/Atoms/Select';
import { SimpleAlert } from '../../../../components/Atoms/SimpleAlert';
import DevelopedBySection from '../../../../components/LayoutAuth/DevelopedBySection';
import HeaderLogo from '../../../../components/LayoutAuth/HeaderLogo';
import HelpSection from '../../../../components/LayoutAuth/HelpSection';
import { LOGIN, VALIDATE_ACCOUNT } from '../../../../constants/routes';
import BusinessUnitParamsContext from '../../../../contexts/BusinessUnitParamsContext/businessUnitParamsContext';
import { setValidateAccountParameters } from '../../../../redux/actions/validateAccountActions';
import { useStyles } from '../../../../styles/global/stylesLogin';

type FormInputs = {
  searchType: string;
  identification: string;
};

const RequestAccountForm = () => {
  const { tenantUUID, businessUnitUUID, contextUrl } = useContext(BusinessUnitParamsContext);
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState<AlertColor>('success');
  const [alertMessage, setAlertMessage] = useState('');
  const [typeList, setTypeList] = useState([]);
  const [identificationType, setIdentificationType] = useState('');

  const { control, handleSubmit, setValue, setError } = useForm<FormInputs>({
    mode: 'all',
  });

  useEffect(() => {
    const init = async () => {
      try {
        const response = await getIdentificationTypes(businessUnitUUID);
        let items = [];

        if (response.items && response.items.length > 0) {
          items = response.items.map((item: any) => {
            return {
              label: item.name[0].toUpperCase() + item.name.slice(1).toLowerCase(),
              value: item.name,
            };
          });
        }

        items.push({
          label: 'Número de suscripción',
          value: 'SUBSCRIPTION',
        });

        setTypeList(items);
      } catch (error) {
        console.error(error);
      }
    };
    init();
  }, []);

  const onSubmit = async (data: FormInputs) => {
    setShowAlert(false);

    if (identificationType === 'RUT' && !validateRut(data.identification)) return;

    if (data.identification != '') {
      try {
        const response = await validateClient(
          tenantUUID,
          businessUnitUUID,
          identificationType,
          data.identification,
          contextUrl
        );
        if (response.email && response.tokenExpirationTime) {
          dispatch(
            setValidateAccountParameters({
              email: response.email,
              tokenExpirationTime: response.tokenExpirationTime,
            })
          );
          history.push({
            pathname: VALIDATE_ACCOUNT,
          });
        }
      } catch (error: any) {
        setError('identification', { type: 'focus' }, { shouldFocus: true });
        switch (error.response.status) {
          case 401:
            setMessageAlert(<RecoverPassword />);
            break;
          case 404:
            setMessageAlert(error.response.data.message);
            break;
          case 400:
            if (
              error.response.data.message.indexOf('correo electrónico') > -1 &&
              error.response.data.message.indexOf('suscripción') > -1
            ) {
              setMessageAlert(error.response.data.message);
            } else {
              setMessageError(error.response.data.message);
            }
            break;
          default:
            setMessageAlert(error.response.data.message);
        }
        console.error(error);
      }
    }
  };

  const setMessageError = (message: any) => {
    setShowAlert(true);
    setAlertType('error');
    setAlertMessage(message);
  };

  const setMessageAlert = (message: any) => {
    setShowAlert(true);
    setAlertType('warning');
    setAlertMessage(message);
  };

  const onError = () => {
    console.error('onError');
  };

  const goToLogin = () => {
    history.push({ pathname: LOGIN });
  };

  const onChangeSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIdentificationType(event.target.value);
    setValue('identification', '');
  };

  const getDisableFields = () => {
    return identificationType === '';
  };

  const getLabelInput = () => {
    if (!getDisableFields()) {
      const label: any = typeList.find((element: any) => element.value === identificationType);
      return label ? label.label : '';
    } else {
      return '';
    }
  };

  return (
    <>
      <HeaderLogo />

      <div className={classes.containerTitle}>
        <div className={classes.containerIcon}>
          <ArrowLeftOutlinedIcon className={classes.icon} onClick={goToLogin} />
          <Typography className={classes.title}>{'Solicita una cuenta'}</Typography>
        </div>
        <Typography className={classes.description}>
          {'Selecciona el tipo de búsqueda y rellena los datos para solicitar tu cuenta'}
        </Typography>
      </div>

      <div className={classes.containerForm}>
        <form onSubmit={handleSubmit(onSubmit, onError)} autoComplete="off">
          <Grid container rowSpacing={2} columnSpacing={5}>
            <Grid item xs={12}>
              <Select
                data={typeList}
                fullWidth
                label={'Tipo de búsqueda'}
                placeholder={'Selecciona'}
                onChange={onChangeSelect}
                value={identificationType}
              />
            </Grid>
            <Grid item xs={12}>
              <InputTextController
                name={'identification'}
                label={getLabelInput()}
                placeholder={getDisableFields() ? '' : `Selecciona ${getLabelInput()}`}
                control={control}
                minLength={1}
                maxLength={identificationType === 'SUBSCRIPTION' ? 50 : 30}
                required={true}
                disabled={getDisableFields()}
                isShrink={!getDisableFields()}
                isIdentificationRut={identificationType === 'RUT'}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                className={getDisableFields() ? classes.buttonDisabled : classes.button}
                variant="contained"
                size="medium"
                type="submit"
                onSubmit={handleSubmit(onSubmit, onError)}
                disabled={getDisableFields()}
              >
                {'Solicita cuenta'}
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

export default RequestAccountForm;

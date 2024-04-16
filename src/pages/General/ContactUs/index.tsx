import {
  Box,
  Button,
  Card,
  CardContent,
  Checkbox,
  FormControlLabel,
  Grid,
  Link,
  Typography,
} from '@mui/material';
import classNames from 'classnames';
import { useContext, useEffect, useState } from 'react';
import { GoogleReCaptcha, GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { getTermsDataPrivacy, sendContactInformation } from '../../../api/api';
import CustomPhoneInput from '../../../components/Contact/CustomPhoneInput';
import InputTextController from '../../../components/Contact/InputTextController';
import { SimpleAlert } from '../../../components/Contact/SimpleAlert';
import ContainerAuthPage from '../../../components/Containers/ContainerAuthPage/ContainerAuthPage';
import CustomBreadcumbs from '../../../components/CustomBreadcumbs';
import ContainerPageContact from '../../../components/LayoutAuth/ContainerPageContact/index';
import { GOOGLE_CAPTCHA_API_KEY } from '../../../constants/constants';
import { CONTACT_US, DATA_PRIVACY_TERMS } from '../../../constants/routes';
import { CONTACT_US_VIEW_NAME } from '../../../constants/views';
import BusinessUnitParamsContext from '../../../contexts/BusinessUnitParamsContext/businessUnitParamsContext';
import { setCurrentViewLink, setCurrentViewName } from '../../../redux/actions/appActions';
import { handleContactPhoneNumber, isAuthenticate } from '../../../util/commons';
import ProgressView from './components/ProgressView/index';
import ResultView from './components/ResultView/index';
import { useStyles } from './styles';

const ContactUs = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();
  const [alert, setAlert] = useState(false);
  const [onSubmitProgress, setOnSubmitProgress] = useState(false);
  const [onSubmitResult, setOnSubmitResult] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [confirmDataPrivacyTerms, setConfirmDataPrivacyTerms] = useState(true);
  const [dataPrivacyTerms, setDataPrivacyTerms] = useState(true);
  const [captcha, setCaptcha] = useState('');
  const { t } = useTranslation();
  const { contextUrlHome, portalConfigParams, businessUnitUUID } =
    useContext(BusinessUnitParamsContext);
  const { contact_phone } = portalConfigParams!;
  const url: string = contextUrlHome ? contextUrlHome : '';

  type FormInputs = {
    name: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    issue: string;
  };

  const { control, reset, handleSubmit } = useForm<FormInputs>({
    mode: 'all',
  });

  const onSubmit = async (data: FormInputs) => {
    setAlert(false);
    setShowResult(false);
    setOnSubmitProgress(true);

    const phoneNumber = data.phoneNumber
      .replace('+', '')
      .replace(/\D/g, '')
      .replace('(', '')
      .replace(')', '');

    const payload = {
      name: data.name,
      lastName: data.lastName,
      email: data.email,
      phoneNumber: phoneNumber,
      issue: data.issue,
      captcha: captcha,
    };

    try {
      await sendContactInformation(url, payload);
      setOnSubmitResult(true);
    } catch (error) {
      setOnSubmitResult(false);
      console.error(error);
    }
    setOnSubmitProgress(false);
    setShowResult(true);
  };

  const onError = () => {
    setAlert(true);
  };

  useEffect(() => {
    dispatch(setCurrentViewName({ currentViewName: CONTACT_US_VIEW_NAME }));
    dispatch(setCurrentViewLink({ currentViewLink: CONTACT_US }));
  }, []);

  const handleGoBack = (clean: boolean) => {
    setShowResult(false);
    if (clean) {
      reset();
    }
  };

  const handleTryAgain = () => {
    handleSubmit(onSubmit, onError)();
  };

  const handleGoHome = () => {
    history.push({ pathname: '/' });
  };

  const onChangeConfirmDataPrivacyTerms = () => {
    setConfirmDataPrivacyTerms(!confirmDataPrivacyTerms);
  };

  const isDisabledButton = () => {
    if (dataPrivacyTerms === null) {
      return false;
    } else {
      return confirmDataPrivacyTerms;
    }
  };

  useEffect(() => {
    const init = async () => {
      try {
        const responseTermsDataPrivacy = await getTermsDataPrivacy(url);
        if (responseTermsDataPrivacy && responseTermsDataPrivacy.termsDataPrivacy) {
          setDataPrivacyTerms(responseTermsDataPrivacy.termsDataPrivacy.description);
        }
      } catch (error) {
        console.error(error);
      }
    };
    init();
  }, []);

  const getContainerPage = (children: any) => {
    if (!isAuthenticate(businessUnitUUID)) {
      return <ContainerPageContact>{children}</ContainerPageContact>;
    } else return children;
  };

  return (
    <>
      {getContainerPage(
        <ContainerAuthPage>
          <CustomBreadcumbs />
          <Box>
            <Grid container spacing={3}>
              <Grid item xs={12} md={8}>
                <Card className={classes.formCard}>
                  <CardContent className={classes.cardContent}>
                    {showResult && (
                      <ResultView
                        result={onSubmitResult}
                        handleGoBack={handleGoBack}
                        handleGoHome={handleGoHome}
                        handleTryAgain={handleTryAgain}
                      />
                    )}

                    {onSubmitProgress && <ProgressView />}

                    {!onSubmitProgress && !showResult && (
                      <GoogleReCaptchaProvider reCaptchaKey={GOOGLE_CAPTCHA_API_KEY}>
                        <form
                          onSubmit={handleSubmit(onSubmit, onError)}
                          onInvalid={() => setAlert(true)}
                          autoComplete="off"
                          noValidate
                        >
                          <Grid container rowSpacing={2} columnSpacing={5}>
                            <Grid item xs={12} sm={12}>
                              <Typography className={classes.formTitle} variant={'h2'}>
                                {t('Ingresa datos de contacto')}
                              </Typography>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                              <InputTextController
                                name={'name'}
                                id={'name'}
                                label={t('Nombre(s)')}
                                control={control}
                                placeholder={t('Nombre')}
                                required={true}
                                minLength={1}
                                className={classes.formInput}
                              />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                              <InputTextController
                                name={'lastName'}
                                label={t('Apellido(s)')}
                                placeholder={t('Apellidos')}
                                control={control}
                                required={true}
                                minLength={1}
                                className={classes.formInput}
                              />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                              <InputTextController
                                name={'email'}
                                label={t('Correo electrónico')}
                                placeholder={t('contacto@correo.com')}
                                control={control}
                                type={'email'}
                                minLength={1}
                                required={true}
                                className={classes.formInput}
                              />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                              <CustomPhoneInput
                                id={'phoneNumber'}
                                name={'phoneNumber'}
                                control={control}
                                label={t('Teléfono celular')}
                                required
                                variant={'outlined'}
                              />
                            </Grid>
                            <Grid item xs={12} sm={12}>
                              <InputTextController
                                name={'issue'}
                                label={t('Descripción')}
                                placeholder={t('Descripción')}
                                control={control}
                                required={true}
                                multiline
                                minRows={3}
                                minLength={10}
                                maxLength={500}
                                className={classes.formInputMultiline}
                              />
                            </Grid>
                            {dataPrivacyTerms != null && (
                              <Grid item xs={12} className={classes.containerCheck}>
                                <FormControlLabel
                                  control={
                                    <Checkbox
                                      value={confirmDataPrivacyTerms}
                                      onChange={onChangeConfirmDataPrivacyTerms}
                                      classes={{
                                        root: classes.checkboxStyle,
                                      }}
                                    />
                                  }
                                  label={
                                    <div className={classes.labelContainer}>
                                      <Typography className={classes.label}>
                                        {t('Autorizo los')}
                                      </Typography>
                                      <Link
                                        underline="none"
                                        className={classNames(classes.label, classes.link)}
                                        href={DATA_PRIVACY_TERMS}
                                        target={'_blank'}
                                      >
                                        {t('Términos de Tratamiento de Data Personal.')}
                                      </Link>
                                    </div>
                                  }
                                />
                              </Grid>
                            )}
                            {alert && (
                              <Grid item xs={12} sm={12}>
                                <SimpleAlert
                                  type={'error'}
                                  textTitle={t('Error al enviar formulario')}
                                  text={t(
                                    'Debes revisar que todos los campos cumplan los requisitos necesarios.'
                                  )}
                                  fullWidth
                                />
                              </Grid>
                            )}
                            <Grid item xs={12} sm={12} className={classes.buttonContainer}>
                              <Button
                                className={classNames(classes.button, classes.buttonColorOutlined)}
                                variant="outlined"
                                size="medium"
                                type="button"
                                onClick={handleGoHome}
                              >
                                {t('Cancelar')}
                              </Button>
                              <Button
                                className={classNames(
                                  classes.button,
                                  isDisabledButton() ? null : classes.buttonColor
                                )}
                                variant="contained"
                                size="medium"
                                type="submit"
                                onSubmit={handleSubmit(onSubmit, onError)}
                                disabled={isDisabledButton()}
                              >
                                {t('Enviar')}
                              </Button>
                            </Grid>
                          </Grid>
                        </form>
                        {captcha.length === 0 && (
                          <GoogleReCaptcha
                            onVerify={(token) => {
                              setCaptcha(token);
                            }}
                          />
                        )}
                      </GoogleReCaptchaProvider>
                    )}
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={4}>
                <Card className={classes.contactCard}>
                  <CardContent className={classes.contactContent}>
                    <Typography className={classes.contactTitle} variant="h2">
                      {t('Atención al cliente')}
                    </Typography>
                    <Typography className={classes.contactPhone} variant="body2">
                      {handleContactPhoneNumber(contact_phone)}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </ContainerAuthPage>
      )}
    </>
  );
};

export default ContactUs;

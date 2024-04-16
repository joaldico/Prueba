import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import {
  AlertColor,
  Grid,
  IconButton,
  MobileStepper,
  Step,
  StepLabel,
  Stepper,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

import { getMaterialByService } from '../../../api/api';
import ContainerAuthPage from '../../../components/Containers/ContainerAuthPage/ContainerAuthPage';
import SnackbarAlert from '../../../components/Global/snackbarAlert';
import BusinessUnitParamsContext from '../../../contexts/BusinessUnitParamsContext/businessUnitParamsContext';
import {
  clearRequest,
  setMaterialSelected,
  setPlanSelected,
  setServiceId,
  setStep,
} from '../../../redux/actions/requestActions';
import { getRequestSelector } from '../../../redux/selectors';
import { handleContactPhoneNumber, isEmpty } from '../../../util/commons';
import DescriptionView from './Steps/DescriptionView';
import RequestView from './Steps/RequestView';
import SummaryView from './Steps/SummaryView';
import { useStyles } from './styles';

const AssistanceRequest = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { step, serviceId, materialSelected, planSelected } = useSelector(getRequestSelector);
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const theme = useTheme();
  const isDesktopOrTablet = useMediaQuery(theme.breakpoints.up('sm'));
  const history = useHistory();
  const [materials, setMaterials] = useState({});
  const [loading, setLoading] = useState(false);
  const [showSnack, setShowSnack] = useState(false);
  const [snackType, setSnackType] = useState<AlertColor>('error');
  const [snackTitle, setSnackTitle] = useState('');
  const [snackBody, setSnackBody] = useState('');
  const { portalConfigParams } = useContext(BusinessUnitParamsContext);
  const { contact_phone } = portalConfigParams!;
  const { control, handleSubmit, setValue, watch } = useForm();

  const steps = [t('Solicitud'), t('Descripción'), t('Resumen')];

  useEffect(() => {
    const init = async () => {
      setLoading(true);
      try {
        if (!isEmpty(portalConfigParams?.businessUnitUUID)) {
          const response = await getMaterialByService(
            portalConfigParams?.businessUnitUUID,
            serviceId.toString()
          );
          setMaterials(response);
          setLoading(false);
        }
      } catch (error) {
        console.error(error);
        setShowSnack(true);
        setSnackType('error');
        setSnackTitle(t('Ha ocurrido un error'));
        setSnackBody(
          t(
            `Por favor inténtalo más tarde o llama al número de contacto ${handleContactPhoneNumber(
              contact_phone
            )}`
          )
        );
        setLoading(false);
      }
    };
    init();
  }, [portalConfigParams, serviceId]);

  useEffect(() => {
    if (id !== serviceId.toString()) dispatch(clearRequest());
    dispatch(setServiceId({ serviceId: parseInt(id) }));
  }, [id]);

  const handleNext = () => {
    dispatch(setStep({ step: step + 1 }));
  };

  const handleBack = () => {
    dispatch(setStep({ step: step - 1 }));
  };

  const handleBackPage = () => {
    history.goBack();
  };

  const setMaterialSelectedInternal = (material: any) => {
    dispatch(setMaterialSelected({ materialSelected: material }));
  };

  const setPlanSelectedInternal = (plan: any) => {
    dispatch(setPlanSelected({ planSelected: plan }));
  };

  const getComponentStep = () => {
    const stepsObject: { [key: number]: JSX.Element } = {
      0: (
        <RequestView
          handleNext={handleNext}
          materials={materials}
          loading={loading}
          materialSelected={materialSelected}
          setMaterialSelected={setMaterialSelectedInternal}
          planSelected={planSelected}
          setPlanSelected={setPlanSelectedInternal}
          serviceId={serviceId.toString()}
        />
      ),
      1: (
        <DescriptionView
          handleNext={handleNext}
          handleBack={handleBack}
          control={control}
          setValue={setValue}
          handleSubmit={handleSubmit}
          watch={watch}
        />
      ),
      2: <SummaryView handleBack={handleBack} />,
    };

    return stepsObject[step];
  };

  return (
    <ContainerAuthPage>
      <SnackbarAlert
        title={snackTitle}
        body={snackBody}
        type={snackType}
        open={showSnack}
        onClose={() => setShowSnack(false)}
      />
      <Grid container spacing={1} sx={{ alignItems: 'stretch' }}>
        {!isDesktopOrTablet && (
          <Grid item xs={1}>
            <IconButton onClick={handleBackPage} className={classes.arrowBack}>
              <KeyboardArrowLeftIcon />
            </IconButton>
          </Grid>
        )}
        <Grid item xs={7}>
          <Typography className={classes.title} color="textPrimary">
            {t('Solicitud de asistencia')}
          </Typography>
        </Grid>
      </Grid>
      {isDesktopOrTablet ? (
        <Stepper activeStep={step}>
          {steps.map((label) => (
            <Step key={label} className={classes.root}>
              <StepLabel
                className={classes.stepContent}
                StepIconProps={{
                  classes: {
                    root: classes.withoutNumbers,
                  },
                }}
              >
                {label}
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      ) : (
        <>
          <MobileStepper
            variant="progress"
            steps={4}
            position="static"
            activeStep={step + 1}
            nextButton={''}
            backButton={''}
            classes={{
              root: classes.rootMobile,
              progress: classes.rootProgress,
            }}
          />
          <Typography variant="subtitle1" className={classes.titleMobileStepper}>{`Paso ${
            step + 1
          } de ${3} completados`}</Typography>
        </>
      )}
      {getComponentStep()}
    </ContainerAuthPage>
  );
};

export default AssistanceRequest;

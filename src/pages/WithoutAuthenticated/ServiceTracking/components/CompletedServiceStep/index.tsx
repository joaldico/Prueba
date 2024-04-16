import { Grid, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import surveyImage from '../../../../../assets/images/survey.svg';
import { ServiceData } from '../../../../../models/ServiceDataModel';
import { ServiceInformation } from '../OnTheWayServiceStep/ServiceInformation/ServiceInformation';
import AccodionSurvey from './components/AccordionSurvey';
import { useStyles } from './styles';

type Props = {
  serviceData: ServiceData | undefined;
};

export const CompletedServiceStep: FC<Props> = ({ serviceData }) => {
  const theme = useTheme();
  const { t } = useTranslation();
  const classes = useStyles();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'lg'));
  const isMobile = useMediaQuery(theme.breakpoints.only('xs'));
  const [survey, setSurvey] = useState(0);

  useEffect(() => {
    if (serviceData?.stateSurvey === 'SENT') {
      setSurvey(1);
    }

    if (serviceData?.stateSurvey === 'ANSWERED') {
      setSurvey(2);
    }
  }, [serviceData]);

  const getSurvey = (title: string, body: string, link: string, isAnchor: boolean) => {
    return (
      <>
        <img
          src={surveyImage}
          alt={'survey'}
          className={
            isDesktop
              ? classes.surveyImageDesktop
              : isTablet
              ? classes.surveyImageTablet
              : isMobile
              ? classes.surveyImageMobile
              : ''
          }
        />
        <Grid container>
          <Grid item xs={12}>
            <Typography
              variant="body1"
              className={
                isDesktop
                  ? classes.surveyTitleDesktop
                  : isTablet
                  ? classes.surveyTitleTablet
                  : isMobile
                  ? classes.surveyTitleMobile
                  : ''
              }
            >
              {title}
            </Typography>
            {isDesktop && (
              <Typography variant="body1" className={classes.textBodySurveyDesktop}>
                {body}
                {isAnchor ? (
                  <a target="_blank" rel="noreferrer" href={serviceData?.linkSurvey || ''}>
                    {link}
                  </a>
                ) : (
                  <a className={classes.textUrlCompleteSurvey}>{link}</a>
                )}
              </Typography>
            )}
            {isTablet && (
              <>
                <Typography variant="body1" className={classes.textBodySurveyTablet}>
                  {body}
                </Typography>
                <Typography variant="body1" className={classes.textBodySurveyTablet}>
                  {isAnchor ? (
                    <a target="_blank" rel="noreferrer" href={serviceData?.linkSurvey || ''}>
                      {link}
                    </a>
                  ) : (
                    <a className={classes.textUrlCompleteSurvey}>{link}</a>
                  )}
                </Typography>
              </>
            )}
            {isMobile && (
              <>
                <Typography variant="body1" className={classes.textBodySurveyMobile}>
                  {body}
                </Typography>
                <Typography variant="body1" className={classes.textBodySurveyMobile}>
                  {isAnchor ? (
                    <a href={serviceData?.linkSurvey || ''}>{link}</a>
                  ) : (
                    <a className={classes.textUrlCompleteSurvey}>{link}</a>
                  )}
                </Typography>
              </>
            )}
          </Grid>
        </Grid>
      </>
    );
  };

  return (
    <>
      {survey === 1 && (
        <AccodionSurvey isDesktop isTablet isMobile typeSurvey={1}>
          {getSurvey(
            t('Queremos conocer tu opinión '),
            t('Participa en nuestra: '),
            t('Encuesta de satisfacción.'),
            true
          )}
        </AccodionSurvey>
      )}
      <div className={classes.container}>
        <ServiceInformation serviceData={serviceData} showEndServiceDate />
      </div>
      {survey === 2 && (
        <AccodionSurvey isDesktop isTablet isMobile typeSurvey={2}>
          {getSurvey(
            t('¡Gracias por tu opinión! '),
            t('Completaste nuestra: '),
            t('Encuesta de satisfacción.'),
            false
          )}
        </AccodionSurvey>
      )}
    </>
  );
};

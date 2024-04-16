import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: 'grid',
    gap: '24px',
  },
  surveyImageDesktop: {
    width: '103.50px',
    height: '71px',
    margin: '16px 31.51px 25px 16px',
  },
  surveyImageTablet: {
    width: '103.50px',
    height: '71px',
    margin: '16px 24px 25px 16px',
  },
  surveyImageMobile: {
    width: '103.50px',
    height: '71px',
    margin: '16px 16px 18px 0px',
  },
  surveyTitleDesktop: {
    fontWeight: '500 !important',
    fontSize: '18px !important',
    lineHeight: '160% !important',
    letterSpacing: '0.15px !important',
    color: 'rgba(0, 0, 0, 0.75)',
    fontStyle: 'normal',
    marginTop: '27.5px !important',
  },
  surveyTitleTablet: {
    fontWeight: '500 !important',
    fontSize: '18px !important',
    lineHeight: '160% !important',
    letterSpacing: '0.15px !important',
    color: 'rgba(0, 0, 0, 0.75)',
    fontStyle: 'normal',
    marginTop: '16px !important',
  },
  surveyTitleMobile: {
    fontWeight: '500 !important',
    fontSize: '14px !important',
    lineHeight: '157% !important',
    letterSpacing: '0.1px !important',
    color: 'rgba(0, 0, 0, 0.75)',
    fontStyle: 'normal',
    marginTop: '16px !important',
  },
  textBodySurveyDesktop: {
    fontWeight: '400 !important',
    fontSize: '16px !important',
    lineHeight: '150% !important',
    letterSpacing: '0.15px !important',
    color: 'rgba(0, 0, 0, 0.75)',
    fontStyle: 'normal',
  },
  textBodySurveyTablet: {
    fontWeight: '400 !important',
    fontSize: '14px !important',
    lineHeight: '143% !important',
    letterSpacing: '0.15px !important',
    color: 'rgba(0, 0, 0, 0.75)',
    fontStyle: 'normal',
  },
  textBodySurveyMobile: {
    fontWeight: '400 !important',
    fontSize: '14px !important',
    lineHeight: '143% !important',
    letterSpacing: '0.15px !important',
    color: 'rgba(0, 0, 0, 0.75)',
    fontStyle: 'normal',
  },
  textUrlCompleteSurvey: {
    color: 'rgba(0, 0, 0, 0.38)',
  },
}));

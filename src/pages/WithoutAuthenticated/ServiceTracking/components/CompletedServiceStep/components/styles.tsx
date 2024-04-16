import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  accordionSummarySizeDesktop: {
    width: '100%',
    height: '45px',
  },
  accordionSummarySizeTablet: {
    width: '100%',
    height: '45px',
  },
  accordionSummarySizeMobile: {
    width: '100%',
    height: '44px',
  },
  accordionSummaryTitle: {
    fontWeight: '500 !important',
    fontSize: '18px !important',
    lineHeight: '160% !important',
    letterSpacing: '0.15px !important',
    color: 'rgba(0, 0, 0, 0.75)',
    fontStyle: 'normal',
  },
  accordionDetailsSizeDesktop: {
    width: '100%',
    height: '54px',
  },
  accordionDetailsSizeTablet: {
    width: '100%',
    height: '54px',
  },
  accordionDetailsSizeMobile: {
    width: '100%',
    height: '54px',
  },
  textTitle: {
    fontWeight: '500 !important',
    fontSize: '14px !important',
    lineHeight: '157% !important',
    letterSpacing: '0.1px !important',
    color: 'rgba(0, 0, 0, 0.75)',
    fontStyle: 'normal',
  },
  textBody: {
    fontWeight: '400 !important',
    fontSize: '14px !important',
    lineHeight: '143% !important',
    letterSpacing: '0.15px !important',
    color: 'rgba(0, 0, 0, 0.75)',
    fontStyle: 'normal',
  },
  accordionSummarySurveySizeDesktop: {
    width: '100%',
    height: '112px',
  },
  accordionSummarySurveySizeTablet: {
    width: '100%',
    height: '112px',
  },
  accordionSummarySurveySizeMobile: {
    width: '100%',
    height: '105px',
  },
}));

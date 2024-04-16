import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

import { hexToRGBA } from './../../../../../../../util/commons';

export const useStyles = makeStyles((theme: Theme) => ({
  titleHeader: {
    background: `linear-gradient(0deg, 
      ${hexToRGBA(theme.palette.primary.main, 0.08)} 0%, 
      ${hexToRGBA(theme.palette.primary.main, 0.08)} 100%), #FFF`,
  },
  title: {
    fontFamily: 'Roboto !important',
    fontSize: '16px !important',
    fontWeight: '400 !important',
    lineHeight: '28px !important',
    letterSpacing: '0.15000000596046448px !important',
    textAlign: 'left',
  },
  titleCoverage: {
    fontFamily: 'Roboto !important',
    fontSize: '14px !important',
    fontWeight: '400 !important',
    lineHeight: '143% !important',
    letterSpacing: '0.15px !important',
    textAlign: 'left',
    marginBottom: '8px !important',
  },
  text: {
    fontFamily: 'Roboto !important',
    fontSize: '14px !important',
    fontWeight: '500 !important',
    lineHeight: '22px !important',
    letterSpacing: '0.10000000149011612px !important',
    textAlign: 'left',
  },
  textBody: {
    fontFamily: 'Roboto !important',
    fontSize: '12px !important',
    fontWeight: '400 !important',
    lineHeight: '143% !important',
    letterSpacing: '0.15px !important',
    textAlign: 'left',
  },
  textExclusion: {
    fontFamily: 'Roboto !important',
    fontSize: '14px !important',
    fontWeight: '400 !important',
    lineHeight: '20px !important',
    letterSpacing: '0.15000000596046448px !important',
    textAlign: 'left',
  },
  alert: {
    width: '168px !important',
    height: '35px !important',
    borderRadius: '16px !important',
    padding: '0px !important',
  },
  titleAlert: {
    fontFamily: 'Roboto',
    fontSize: '13px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '18px',
    letterSpacing: '0.16px',
  },
  cardBalance: {
    borderRadius: '20px !important',
    background: `#FAFAFA !important`,
    boxShadow: 'none !important',
  },
  cardTam: {
    width: '830px',
    [theme.breakpoints.down('md')]: {
      width: '450px',
    },
    [theme.breakpoints.down('sm')]: {
      width: '360px',
    },
  },
}));

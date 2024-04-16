import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
  containerRoot: {
    padding: '0 4em',
    marginTop: '40px',
  },
  containerTitle: {
    marginBottom: '45px',
  },
  containerPayment: {
    marginBottom: '25px',
  },
  containerDetail: {
    marginRight: '20px',
  },
  root: {
    display: 'flex',
    alignItems: 'center',
    margin: 'auto',
  },
  media: {
    height: '79px',
    width: '63px',
  },
  containerLogo: {
    padding: '2em',
  },
  containerRevision: {
    display: 'flex',
  },
  fontStyle: {
    fontWeight: 'bold',
    lineHeight: '24px',
    display: 'flex',
    alignItems: 'center',
  },
  titleName: {
    fontSize: '16px !important',
    lineHeight: '24px !important',
    fontStyle: 'normal',
    fontWeight: '500 !important',
  },
  title: {
    fontSize: '24px !important',
    fontWeight: '400 !important',
    lineHeight: '32.02px',
  },
  rowInfo: {
    display: 'flex',
  },
  infoUser: {
    marginLeft: '70px',
    '& p': {
      fontSize: '14px',
      lineHeight: '20.02px !important',
      fontStyle: 'normal',
    },
  },
  textContent: {
    '& p': {
      fontSize: '14px',
      lineHeight: '20.02px !important',
      fontStyle: 'normal',
    },
  },
  titleUser: {
    '& p': {
      fontSize: '14px',
      lineHeight: '20.02px !important',
      fontStyle: 'normal',
    },
  },
  confirmPayment: {
    marginTop: '17px !important',
  },
  containerWayPayment: {
    marginBottom: '0px',
  },
  titlePaymentWay: {
    marginLeft: '20px !important',
    fontSize: '20px !important',
    fontWeight: '500 !important',
    fontStyle: 'normal',
  },
  containerService: {
    padding: '0 16px',
    height: '100%',
  },
  marginPrice: {
    marginBottom: '0px',
  },
  totalPayment: {
    color: '#002FC5 !important',
    marginTop: '145px !important',
    fontSize: '16px !important',
  },
  paymentDetail: {
    padding: '16px',
  },
  paymentProtect: {
    fontSize: '12px',
    fontWeight: '400px',
    marginLeft: '10px',
    lineHeight: '19.92px',
  },
  detailInfo: {
    padding: '16px 0px 0px 0px !important',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'end',
    margin: '27px 16px 27px 0',
  },
  buttonStyle: {
    fontWeight: 'bold !important',
    fontSize: '13px !important',
    paddingLeft: '10px !important',
    paddingRight: '10px !important',
  },
  titlePersonName: {
    paddingLeft: '16px',
    paddingTop: '16px',
    paddingBottom: '5px',
    fontSize: '20px !important',
    fontWeight: '500 !important',
    fontStyle: 'normal',
    lineHeight: '32px !important',
  },
  containerDataUser: {
    marginBottom: '25px',
  },
  acceptTerms: {
    padding: '25px 0',
  },
  wayPaymentLabel: {
    marginBottom: '28.5px !important',
  },
  radioLabelStyle: {
    '& span': {
      fontSize: '14px !important',
      lineHeight: '20.02px',
      fontWeight: '400',
    },
  },
  radioButtonStyle: {
    color: '#002FC5 !important',
  },
  'MuiSvgIcon-fontSizeMedium MuiSvgIcon-root css-i4bv87-MuiSvgIcon-root': {
    color: 'grey',
  },
  '@media (max-width: 998px)': {
    buttonContainer: {
      marginBottom: '28px',
    },
    containerRevision: {
      display: 'block',
    },
    containerDetail: {
      marginRight: '0px',
    },
    containerWayPayment: {
      marginBottom: '25px',
    },
  },
  '@media (max-width: 768px)': {
    containerRoot: {
      padding: '0px !important',
    },
  },
}));

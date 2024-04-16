import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
  marginItems: {
    marginBottom: '30px !important',
  },
  proffesionalSurvey: {
    fontWeight: 500,
    fontSize: 21,
    marginBottom: '40px',
  },
  serviceSurvey: {
    fontWeight: 500,
    fontSize: 14,
    color: 'rgba(0, 0, 0, 0.6)',
  },
  serviceName: {
    color: 'rgba(0, 0, 0, 0.9)',
    fontWeight: 'bold !important',
  },
  marginQuestions: {
    marginTop: '20px !important',
  },
  buttonSurvey: {
    padding: '8px 70px !important',
    fontWeight: 'bold !important',
  },
  questionsTypeSurvey: {
    fontWeight: 500,
    fontSize: 14,
    color: 'rgba(0, 0, 0, 0.6)',
    marginBottom: 50,
  },
  questionContainer: {
    display: 'flex',
    marginBottom: '20px',
    marginTop: '20px',
    alignItems: 'center',
  },
  questionType: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  questionOption: {
    color: 'rgba(0, 0, 0, 0.87)',
    fontWeight: 500,
    paddingTop: '5px',
  },
  radioOption: {
    display: 'flex',
    flexDirection: 'column',
  },
  inputOption: {
    fontWeight: 500,
    fontSize: 14,
    color: 'rgba(0, 0, 0, 0.6)',
  },
  inputOptionField: {
    display: 'flex',
    marginBottom: '20px',
    marginTop: '20px',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  surveyStatus: {
    marginBottom: '30px',
    fontSize: 24,
    fontWeight: 600,
  },
  surveyStatusText: {
    fontSize: 18,
    fontWeight: 500,
    marginTop: '20px',
  },
  error: {
    width: 'fit-content',
    textAlign: 'center',
    margin: '30vh auto 0',
    transform: 'translateY(-50%)',
    '& svg': {
      fontSize: '6rem',
    },
    color: 'red',
  },
  centrado: {
    marginBottom: '30px',
    marginTop: '30px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  buttonDisabled: {
    padding: '8px 70px !important',
    backgroundColor: 'rgba(0, 0, 0, 0.26) !important',
  },
  divider: {
    width: '743px',
    margin: '40px 30px 0px 30px !important',
    display: 'inline-block',
  },
  characterCounterContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridTemplateRows: 'repeat(2, 1fr)',
  },
  textFieldContainer: {
    width: '100%',
  },
  characterCounter: {
    alignSelf: 'flex-end',
    marginTop: '8px',
    textAlign: 'right',
    marginRight: '100px',
  },
}));

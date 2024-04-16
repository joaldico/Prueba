import ErrorSharp from '@mui/icons-material/ErrorSharp';
import { Box, LinearProgress, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Radio from '@mui/material/Radio';
import TextField from '@mui/material/TextField';
import React, { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import surveySuccess from '../../../assets/images/surveySuccess.svg';
import defaultLogo from '../../../assets/images/tuten.png';
import BusinessUnitParamsContext from '../../../contexts/BusinessUnitParamsContext/businessUnitParamsContext';
import { loginRequest } from '../../../redux/actions';
import { getAuthSelector } from '../../../redux/selectors';
import { surveyService } from '../../../services';
import { AnswerData } from '../../../services/survey/abstraction';
import { GenericError } from '../../../services/types';
import { BusinessUnit } from './BusinessUnit';
import { Question } from './Question';
import { useStyles } from './styles';
import { Survey } from './Survey';

const typesShow: string[] = [];
const types: string[] = [];
const allAnswers: AnswerData[] = [];

export const ProfessionalSurvey: React.FC = () => {
  const { search } = useLocation();
  const { authToken, pending, error } = useSelector(getAuthSelector);
  const dispatch = useDispatch();
  const [survey, setSurvey] = useState<Survey>();
  const [businessUnit, setBusinessUnit] = useState<BusinessUnit>();
  const [questions, setQuestions] = useState([]);
  const [buttonAction, setButtonAction] = useState('');
  const [answers, setAnswers] = useState({});
  const [isLoading, setIsloading] = useState(true);
  const [errorRequest, setErrorRequest] = useState(false);
  const [status, setStatus] = useState(0);
  const [disabled, setDisabled] = useState(true);
  const classes = useStyles();
  const [text, setText] = useState('');
  const buOnAssist = '30a426d0-f0d9-415e-8d62-5b4034936d77';
  const tenanScale = 'f2d3e4a4-4b0d-42ec-bb9a-6e6d9fd2f4d7';

  enum QuestionTypes {
    TEXT = 'TEXT',
    INTERVAL_1_TO_5 = 'INTERVAL_1_TO_5',
    INTERVAL_1_TO_10 = 'INTERVAL_1_TO_10',
    INTERVAL_1_TO_4 = 'INTERVAL_1_TO_4',
  }
  const questionsTypeText = (question: Question) => {
    if (survey?.tenant === tenanScale) {
      return (
        <div key={question.idAsk} className={classes.inputOption}>
          <div className={classes.inputOptionField}> {question.ask} </div>
          <div
            className="characterCounterContainer"
            style={{ marginRight: '100px', marginLeft: '100px' }}
          >
            <div className="textFieldContainer">
              <TextField
                onChange={(e) => handleChange(e.target.value, question.idAsk)}
                fullWidth
                multiline
                rows={4}
                inputProps={{ maxLength: 1000 }}
                placeholder={'Ingresa tu comentario...'}
              />
            </div>
            <p style={{ textAlign: 'right' }}>{text.length}/ 1000</p>
          </div>
        </div>
      );
    } else {
      return (
        <div key={question.idAsk} className={classes.inputOption}>
          <div className={classes.inputOptionField}> {question.ask} </div>
          <TextField
            onChange={(e) => handleChange(e.target.value, question.idAsk)}
            fullWidth
            multiline
            rows={4}
            inputProps={{ maxLength: 200 }}
          />
        </div>
      );
    }
  };

  const questionsType = () => {
    let statusMessage = false;
    return questions.map((question: Question) => {
      switch (question.type) {
        case QuestionTypes.TEXT:
          return questionsTypeText(question);
        case QuestionTypes.INTERVAL_1_TO_5:
          return (
            <div key={question.idAsk} className={classes.questionsTypeSurvey}>
              <div className={classes.centrado}> {question.ask} </div>
              <div className={classes.questionType}>
                {Array.apply(1, Array(5)).map((x, i) => {
                  return (
                    <div key={question.idAsk + '-' + i} className={classes.radioOption}>
                      <FormLabel>{i + 1}</FormLabel>
                      {rateItemRender_(i, question)}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        case QuestionTypes.INTERVAL_1_TO_10:
          return (
            <div key={question.idAsk} className={classes.questionsTypeSurvey}>
              <div className={classes.centrado}>{questionDataOnassist_(question.ask)}</div>
              <div className={classes.questionType}>
                {Array.apply(1, Array(11)).map((x, i) => {
                  return (
                    <div key={question.idAsk + '-' + i} className={classes.radioOption}>
                      <FormLabel>{i}</FormLabel>
                      {rateItemRender_(i - 1, question)}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        case QuestionTypes.INTERVAL_1_TO_4:
          return (
            <div>
              <div className={classes.questionType} style={{ fontSize: '14px' }}>
                {' '}
                {!statusMessage
                  ? 'Evalúa los siguientes aspectos del equipo técnico asignado.'
                  : ''}
                {(statusMessage = true)}
              </div>
              <div key={question.idAsk} className={classes.questionsTypeSurvey}>
                <div className={classes.centrado}> {question.ask} </div>
                <div className={classes.questionType}>
                  {Array.apply(1, Array(4)).map((x, i) => {
                    return (
                      <div key={question.idAsk + '-' + i} className={classes.radioOption}>
                        <FormLabel>{i + 1}</FormLabel>
                        {rateItemRender_(i, question)}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        default:
          return <></>;
      }
    });
  };

  const questionDataOnassist_ = (question: string) => {
    if (question.includes('&')) {
      const partes = question.split('&');
      if (partes.length > 0) {
        return (
          <div>
            <div style={{ textAlign: 'center' }}>{partes[0]}</div>
            <div style={{ textAlign: 'center' }}>{partes[1]}</div>
          </div>
        );
      } else {
        return <div>{question}</div>;
      }
    } else {
      return <div>{question}</div>;
    }
  };

  const rateItemRender_ = (index: number, question: Question) => {
    const isChecked =
      Object.keys(answers).findIndex((x) => x === question.idAsk.toString()) > -1
        ? Object.values(answers)[
            Object.keys(answers).findIndex((x) => x === question.idAsk.toString())
          ] === `${index + 1}`
        : false;

    const radioStyle = {
      paddingBlock: '0px',
      color: isChecked ? survey?.baseColor : 'gray',
    };
    return (
      <Radio
        checked={isChecked}
        value={`${index + 1}`}
        onChange={(e) => handleChange(e.target.value, question.idAsk)}
        style={radioStyle}
      />
    );
  };

  const getQuestionTypes = (questions: Question[]) => {
    questions.forEach((question) => {
      if (!types.includes(question.type)) {
        types.push(question.type);
      }
    });
  };

  const handleSubmit = async () => {
    try {
      const response = await surveyService.sendSurvey({
        data: allAnswers,
        id: survey?.idTemplate || '',
        token: authToken || '',
      });
      if (response && !(response instanceof GenericError)) {
        setStatus(response.state);
      }
    } catch (err) {
      setErrorRequest(true);
    }
  };

  const repeatedTypes = (types: string[], questionTypes: QuestionTypes) => {
    return types.every((v: string) => v == questionTypes);
  };

  const getQuestionsToShow = (questions: Question[], survey: Survey | null) => {
    setDisabled(true);
    if (survey?.tenant === tenanScale) {
      setButtonAction('Enviar encuesta');
    } else if (
      typesShow.length === 0 &&
      !repeatedTypes(types, QuestionTypes.INTERVAL_1_TO_10) &&
      !repeatedTypes(types, QuestionTypes.INTERVAL_1_TO_5) &&
      !repeatedTypes(types, QuestionTypes.TEXT)
    ) {
      typesShow.push(types[0]);
      setButtonAction('Siguiente');
    } else if (typesShow.length < types.length) {
      typesShow.push(types[typesShow.length]);
      if (typesShow.length === types.length) {
        setButtonAction(survey?.tenant === buOnAssist ? 'Enviar encuesta' : 'Enviar');
      }
    }

    const auxQuestions: any = [];
    questions.forEach((question) => {
      if (survey?.tenant === tenanScale) {
        auxQuestions.push(question);
      } else if (question.type === typesShow[typesShow.length - 1]) {
        auxQuestions.push(question);
      }
    });
    setQuestions(auxQuestions);
  };

  const errorTemplate = () => {
    return (
      <Box className={classes.error}>
        <ErrorSharp />
        <Typography variant="h5" color="error">
          Portal Error
        </Typography>
        <Typography color="textSecondary">Error al procesar su solicitud</Typography>
      </Box>
    );
  };

  const surveyStatus = (state: number) => {
    switch (state) {
      case 1:
        return (
          <Grid item xs={12} className={classes.surveyStatus}>
            <img src={surveySuccess} alt="Logo" />
            <div>¡Muchas gracias!</div>
            <div className={classes.surveyStatusText}>
              Tomaremos en cuenta tus comentarios para mejorar tu experiencia.
            </div>
          </Grid>
        );
      default:
        return (
          <Grid item xs={12} className={classes.surveyStatus}>
            <div>{survey?.header}</div>
            <div className={classes.surveyStatusText}>{survey?.body}</div>
          </Grid>
        );
    }
  };

  const isValidUrl = (url: string) => {
    //eslint-disable-next-line
    return new RegExp(/(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/).test(
      url
    );
  };
  const data = useContext(BusinessUnitParamsContext);
  const init = async (hash: string) => {
    const survey = await searchSurvey(hash, authToken || '');
    setSurvey(survey);
    if (survey?.state) {
      setStatus(survey.state);
    }
    const businessUnit = { logoBO: data.fileUrl || '', baseColor: data.colorCode || '' };

    if (!businessUnit || !survey) {
      setErrorRequest(true);
    } else {
      if (!isValidUrl(businessUnit.logoBO)) {
        businessUnit.logoBO = defaultLogo;
      }
      setSurvey(survey);
      setBusinessUnit(businessUnit);
      if (survey.Preguntas) {
        getQuestionTypes(survey.Preguntas);
        getQuestionsToShow(survey.Preguntas, survey);
      }
    }
    setIsloading(false);
  };

  const searchSurvey = async (hash: string, token: string) => {
    try {
      const survey = await surveyService.getSurvey({
        hash,
        token,
      });
      if (survey && !(survey instanceof GenericError)) {
        return survey;
      }
    } catch (err) {
      return;
    }
  };

  useEffect(() => {
    const hash = new URLSearchParams(search).get('id');
    if (hash && authToken && !pending) {
      init(hash);
    }
    if (!hash || error) {
      setErrorRequest(true);
      setIsloading(false);
    }
  }, [authToken]);

  useEffect(() => {
    dispatch(loginRequest());
  }, []);

  if (isLoading) return <LinearProgress style={{ marginTop: 8 }} />;

  const handleChange = (value: string, idQuestion: number) => {
    setAnswers((prevState) => ({ ...prevState, [idQuestion]: value }));
    loadAnswers(idQuestion, value);
    setText(value);
  };

  const loadAnswers = (idQuestion: number, value: string) => {
    const index = allAnswers.findIndex((x) => x.questionId === idQuestion);
    if (index > -1) {
      if (value === '') {
        allAnswers.splice(index, 1);
      } else {
        allAnswers[index].answer = value;
      }
    } else {
      allAnswers.push({
        questionId: idQuestion,
        answer: value,
      });
    }

    let isMissing = false;

    questions.forEach((question: Question) => {
      if (!allAnswers.find((x) => x.questionId === question.idAsk)) {
        isMissing = true;
      }
    });
    setDisabled(isMissing);
  };

  const headTemplate = () => {
    if (survey?.tenant === buOnAssist) {
      return (
        <div className={classes.serviceSurvey}>
          <div>Información del servicio:</div>
          Servicio de
          <span className={classes.serviceName}> {survey?.nameServicio}</span> realizado el
          <span className={classes.serviceName}> {survey?.fechaServicio}.</span>
          <p></p>
          <Divider className={classes.divider}></Divider>
        </div>
      );
    } else if (survey?.tenant === tenanScale) {
      return (
        <div className={classes.serviceSurvey}>
          <div>Nos gustaría escuchar tu opinión respecto al servicio </div>
          <span className={classes.serviceName}> {survey?.nameServicio}</span> realizado el
          <span className={classes.serviceName}> {survey?.fechaServicio}.</span>
          <p></p>
          <Divider className={classes.divider}></Divider>
        </div>
      );
    } else {
      return (
        <div className={classes.serviceSurvey}>
          Por el servicio de
          <span className={classes.serviceName}> {survey?.nameServicio}</span> realizado el
          <span className={classes.serviceName}> {survey?.fechaServicio}.</span>
        </div>
      );
    }
  };

  const footerScale = () => {
    const email = 'seguimiento4@tutenlabs.com';
    if (survey?.tenant === tenanScale) {
      return (
        <div>
          <Grid
            item
            xs={12}
            className={classes.centrado}
            style={{ paddingLeft: '100px', paddingTop: '38px', paddingRight: '100px' }}
          >
            <div className={classes.serviceSurvey}>
              <p>
                Nuestro equipo está disponible de Lunes a Viernes, entre las 9:00 y las 19:30, para
                resolver tus inquietudes y apoyarte en lo que necesites. Puedes contactarnos
                enviando un correo a <a href={`mailto:${email}`}>{email}</a>, y te responderemos a
                la brevedad.
              </p>
            </div>
          </Grid>
        </div>
      );
    }
  };

  return (
    <>
      {errorRequest ? (
        errorTemplate()
      ) : (
        <Paper
          sx={{
            p: 4,
            margin: 'auto',
            width: '1288px',
            padding: '20px 16px 38px 16px',
            flexGrow: 1,
          }}
        >
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            style={{ textAlign: 'center' }}
          >
            <Grid item xs={12} className={classes.marginItems}>
              {survey?.logoBo === null ? (
                <img width={'180px'} src={businessUnit?.logoBO} alt="Logo" />
              ) : (
                <img width={'180px'} src={survey?.logoBo} alt="Logo" />
              )}
            </Grid>

            {status ? (
              surveyStatus(status)
            ) : (
              <>
                <Grid item xs={12}>
                  {survey?.nameProfesional &&
                  !(survey?.tenant === buOnAssist) &&
                  !(survey?.tenant === tenanScale) ? (
                    <div className={classes.proffesionalSurvey}>
                      Evalua tu experiencia con{' '}
                      <span style={{ color: businessUnit?.baseColor || 'red' }}>
                        {survey?.nameProfesional}
                      </span>
                    </div>
                  ) : (
                    <div className={classes.proffesionalSurvey}>
                      {survey?.tenant === buOnAssist || survey?.tenant === tenanScale
                        ? 'Evalúa tu experiencia con nosotros.'
                        : 'Evalúa tu experiencia'}
                    </div>
                  )}
                </Grid>
                <Grid item xs={12}>
                  {headTemplate()}
                </Grid>
                <Grid item xs={12}>
                  {questionsType()}
                </Grid>
                <Grid item xs={12} className={classes.marginQuestions}>
                  <Button
                    className={disabled ? classes.buttonDisabled : classes.buttonSurvey}
                    style={{
                      backgroundColor:
                        survey?.baseColor === null
                          ? businessUnit?.baseColor || 'red'
                          : survey?.baseColor,
                    }}
                    variant="contained"
                    disabled={disabled}
                    onClick={() =>
                      buttonAction == 'Enviar encuesta' || buttonAction == 'Enviar'
                        ? handleSubmit()
                        : getQuestionsToShow(survey?.Preguntas || [], survey || null)
                    }
                  >
                    {buttonAction}
                  </Button>
                  {footerScale()}
                </Grid>
              </>
            )}
          </Grid>
        </Paper>
      )}
    </>
  );
};

import API from '../../api/api';
import { GenericError } from '../types';
import {
  InputAnswerSurvey,
  InputSurvey,
  ISurveyService,
  OutputAnswerSurvey,
  OutputSurvey,
  SuccessAnswerSurvey,
  SuccessSurvey,
} from './abstraction';

class SurveyService implements ISurveyService {
  getSurvey = async (payload: InputSurvey): Promise<OutputSurvey> => {
    const { data } = await API.post(
      `${process.env.REACT_APP_URL_ECOMMERCE_CUSTOMER_PORTAL}/rating-survey/consumer-info-template`,
      {
        id: payload.hash,
      }
    );
    if (!data) return;
    if (data.body)
      return new SuccessSurvey({
        status: data.body.status,
        state: data.body.state,
        body: data.body.body,
        header: data.body.header,
        menssage: data.body.menssage,
        idTemplate: data.body.idTemplate,
        nameProfesional: data.body.nameProfesional,
        nameServicio: data.body.nameServicio,
        fechaServicio: data.body.fechaServicio,
        businessUnitId: data.body.businessUnitId,
        tenant: data.body.tenant,
        logoBo: data.body.logoBo,
        baseColor: data.body.baseColor,
        Preguntas: data.body.Preguntas,
      });
    else return new GenericError(data.body);
  };

  sendSurvey = async (payload: InputAnswerSurvey): Promise<OutputAnswerSurvey> => {
    const { data } = await API.post(
      `${process.env.REACT_APP_URL_ECOMMERCE_CUSTOMER_PORTAL}/rating-survey/record-responses`,
      {
        data: payload.data,
        id: payload.id,
      }
    );
    if (!data) return;
    if (data.body)
      return new SuccessAnswerSurvey({
        state: data.body.state,
        body: data.body.body,
        header: data.body.header,
        businessUnitId: data.body.businessUnitId,
      });
    else return new GenericError(data.body);
  };
}
export const surveyService = Object.freeze(new SurveyService());

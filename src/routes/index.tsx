import { FC, useContext } from 'react';
import { Redirect, RouteProps } from 'react-router';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import LayoutAuth from '../components/LayoutAuth';
import LayoutClient from '../components/LayoutClient';
import LayoutPublicPortal from '../components/LayoutPublicPortal';
import {
  ACTIVATE_ACCOUNT,
  ASSISTANCE_REQUEST,
  CHANGE_PASSWORD,
  CONTACT_US,
  DATA_PRIVACY_TERMS,
  FREQUENT_QUESTIONS,
  HOME,
  LEGAL_NOTICES,
  LOGIN,
  REQUEST_ACCOUNT,
  RESET_PASSWORD,
  SERVICE_TRACKING,
  SURVEY,
  TERMS_AND_CONDITIONS,
  VALIDATE_ACCOUNT,
} from '../constants/routes';
import BusinessUnitParamsContext from '../contexts/BusinessUnitParamsContext/businessUnitParamsContext';
import AssistanceRequest from '../pages/Authenticated/AssitanceRequest';
import FrequentQuestions from '../pages/Authenticated/FrequentQuestions';
import Home from '../pages/Authenticated/Home';
import LegalNotices from '../pages/Authenticated/LegalNotices';
import TermsAndConditions from '../pages/Authenticated/TermsAndConditions';
import ContactUs from '../pages/General/ContactUs';
import DataPrivacyTerms from '../pages/General/DataPrivacyTerms';
import ActivateAccount from '../pages/WithoutAuthenticated/ActivateAccount';
import ChangePassword from '../pages/WithoutAuthenticated/ChangePassword';
import { ConfirmPurchase } from '../pages/WithoutAuthenticated/ConfirmPurchase';
import { FailedPaymentView } from '../pages/WithoutAuthenticated/FailedPayment';
import { GenericErrorView } from '../pages/WithoutAuthenticated/GenericError';
import Login from '../pages/WithoutAuthenticated/Login';
import { ProfessionalSurvey } from '../pages/WithoutAuthenticated/ProfessionalSurvey';
import RequestAccount from '../pages/WithoutAuthenticated/RequestAccount';
import ResetPassword from '../pages/WithoutAuthenticated/ResetPassword';
import { ServiceTracking } from '../pages/WithoutAuthenticated/ServiceTracking';
import { SuccessPaymentView } from '../pages/WithoutAuthenticated/SuccessPayment';
import { TimeoutErrorView } from '../pages/WithoutAuthenticated/TimeoutError';
import ValidateAccount from '../pages/WithoutAuthenticated/ValidateAccount';
import { isAuthenticate } from '../util/commons';

const ComponentDefault = () => {
  return <div />;
};

const authAllRoutes: RouteProps[] = [
  { exact: true, component: ContactUs, path: CONTACT_US },
  { exact: true, component: DataPrivacyTerms, path: DATA_PRIVACY_TERMS },
];

const authRoutes: RouteProps[] = [
  { exact: true, component: ComponentDefault, path: SURVEY },
  { exact: true, component: ComponentDefault, path: SERVICE_TRACKING },
  { component: SuccessPaymentView, path: '/success' },
  { exact: true, component: FailedPaymentView, path: '/fail' },
  { exact: true, component: GenericErrorView, path: '/error' },
  { exact: true, component: ConfirmPurchase, path: '/pagos' },
  { exact: true, component: TimeoutErrorView, path: '/error/timeout' },
  { exact: true, component: Login, path: LOGIN },
  { exact: true, component: RequestAccount, path: REQUEST_ACCOUNT },
  { exact: true, component: ValidateAccount, path: VALIDATE_ACCOUNT },
  { exact: true, component: ActivateAccount, path: ACTIVATE_ACCOUNT },
  { exact: true, component: ResetPassword, path: RESET_PASSWORD },
  { exact: true, component: ChangePassword, path: CHANGE_PASSWORD },
  ...authAllRoutes,
  {
    path: '*',
    render: () => <Redirect to={LOGIN} />,
  },
];

const routes: RouteProps[] = [
  { exact: true, component: Home, path: HOME },
  { exact: true, component: FrequentQuestions, path: FREQUENT_QUESTIONS },
  { exact: true, component: TermsAndConditions, path: TERMS_AND_CONDITIONS },
  { exact: true, component: LegalNotices, path: LEGAL_NOTICES },
  { exact: true, component: AssistanceRequest, path: ASSISTANCE_REQUEST },
  ...authAllRoutes,
  { path: '*', render: () => <Redirect to={HOME} /> },
];

const serviceTrackingRoutes: RouteProps[] = [
  { exact: true, component: ServiceTracking, path: SERVICE_TRACKING },
  { path: '*', render: () => <Redirect to={SERVICE_TRACKING} /> },
];

export const Routes: FC = () => {
  const { businessUnitUUID } = useContext(BusinessUnitParamsContext);

  return (
    <BrowserRouter>
      <Switch>
        {isAuthenticate(businessUnitUUID) ? (
          <Route path={'/'} render={(props) => <LayoutClient routes={routes} {...props} />} />
        ) : (
          <>
            <Route exact path={SURVEY} render={() => <ProfessionalSurvey />} />
            <Route
              exact
              path={SERVICE_TRACKING}
              render={(props) => <LayoutPublicPortal routes={serviceTrackingRoutes} {...props} />}
            />
            <Route path={'/'} render={(props) => <LayoutAuth routes={authRoutes} {...props} />} />
          </>
        )}
      </Switch>
    </BrowserRouter>
  );
};

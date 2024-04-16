import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

import Container from '../../../components/Containers/Container';
import ContainerPage from '../../../components/LayoutAuth/ContainerPage';
import { GOOGLE_CAPTCHA_API_KEY } from '../../../constants/constants';
import RequestAccountForm from './RequestAccountForm';

const RequestAccount = () => {
  return (
    <GoogleReCaptchaProvider reCaptchaKey={GOOGLE_CAPTCHA_API_KEY}>
      <Container>
        <ContainerPage>
          <RequestAccountForm />
        </ContainerPage>
      </Container>
    </GoogleReCaptchaProvider>
  );
};

export default RequestAccount;

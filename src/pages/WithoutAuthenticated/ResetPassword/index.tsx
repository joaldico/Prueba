import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

import Container from '../../../components/Containers/Container';
import ContainerPage from '../../../components/LayoutAuth/ContainerPage';
import { GOOGLE_CAPTCHA_API_KEY } from '../../../constants/constants';
import ResetPasswordForm from './ResetPasswordForm';

const ResetPassword = () => {
  return (
    <GoogleReCaptchaProvider reCaptchaKey={GOOGLE_CAPTCHA_API_KEY}>
      <Container>
        <ContainerPage>
          <ResetPasswordForm />
        </ContainerPage>
      </Container>
    </GoogleReCaptchaProvider>
  );
};

export default ResetPassword;

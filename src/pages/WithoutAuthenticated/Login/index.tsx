import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

import Container from '../../../components/Containers/Container';
import ContainerPage from '../../../components/LayoutAuth/ContainerPage';
import { GOOGLE_CAPTCHA_API_KEY } from '../../../constants/constants';
import LoginForm from './LoginForm';

const Login = () => {
  return (
    <GoogleReCaptchaProvider reCaptchaKey={GOOGLE_CAPTCHA_API_KEY}>
      <Container>
        <ContainerPage>
          <LoginForm />
        </ContainerPage>
      </Container>
    </GoogleReCaptchaProvider>
  );
};

export default Login;

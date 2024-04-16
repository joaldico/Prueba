import { Box } from '@mui/material';
import { FC } from 'react';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

import { GOOGLE_CAPTCHA_API_KEY } from '../../constants/constants';
import { Navbar } from '../organisms/Navbar';
import { LayoutStyled } from './styles';

export const Layout: FC = ({ children }) => {
  return (
    <GoogleReCaptchaProvider reCaptchaKey={GOOGLE_CAPTCHA_API_KEY}>
      <LayoutStyled>
        <Navbar />
        <Box position={'relative'} display={'flex'} flexDirection={'column'} py={3} flexGrow={1}>
          {children}
        </Box>
      </LayoutStyled>
    </GoogleReCaptchaProvider>
  );
};

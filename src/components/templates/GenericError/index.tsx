import { Box, Typography } from '@mui/material';
import { FC } from 'react';

import errorImg from '../../../assets/images/error.svg';
import { CustomBox, CustomContainer } from '../../Atoms';
import { Image } from '../../Atoms/Image';

export type ErrorTemplateProps = {
  mainMessage?: string;
  secondaryMessage?: string;
  img?: string;
};
export const GenericErrorTemplate: FC<ErrorTemplateProps> = ({
  mainMessage = '¡Oops! Ocurrió un error :(',
  img = errorImg,
  secondaryMessage = 'Por favor contactar con tu agente telefónico para proseguir con tu pago.',
}) => {
  return (
    <CustomContainer>
      <CustomBox px={'41px'} width={'100%'}>
        <Box mt={2} maxWidth={'151.04px'} marginX={'auto'}>
          <Image src={img} alt={'error'} />
        </Box>
        <Typography
          color={'#3D3F4C'}
          variant={'body2'}
          textAlign={'center'}
          mb={2}
          fontWeight={'700'}
        >
          {mainMessage}
        </Typography>
        <Typography variant={'body3'} textAlign={'center'} my={2}>
          {secondaryMessage}
        </Typography>
      </CustomBox>
    </CustomContainer>
  );
};

import { Box, Typography } from '@mui/material';
import { FC } from 'react';

import failedPaymentImg from '../../../assets/images/paymentFailed.svg';
import { CustomBox, CustomContainer } from '../../Atoms';
import { Image } from '../../Atoms/Image';
import { ErrorTemplateProps } from '../GenericError';

export type Props = {
  nroRequest: string | number;
} & ErrorTemplateProps;

export const FailedPaymentTemplate: FC<Props> = ({
  nroRequest,
  mainMessage = 'Hubo un error al procesar tu pago :(',
  secondaryMessage = 'Por favor contactar con tu agente telefónico para proseguir con tu pago.',
}) => {
  return (
    <CustomContainer>
      <CustomBox px={'41px'} width={'100%'}>
        <Box mt={2} maxWidth={'146.3px'} marginX={'auto'}>
          <Image src={failedPaymentImg} alt={'failed-payment'} />
        </Box>
        <Typography
          color={'#3D3F4C'}
          variant={'body2'}
          textAlign={'center'}
          mb={'25px'}
          fontWeight={'700'}
        >
          {mainMessage}
        </Typography>
        <Typography variant={'body3'} textAlign={'center'} my={'25px'}>
          Transacción rechazada No. {nroRequest}
        </Typography>
        <Typography variant={'body3'} textAlign={'center'} my={'25px'}>
          {secondaryMessage}
        </Typography>
      </CustomBox>
    </CustomContainer>
  );
};

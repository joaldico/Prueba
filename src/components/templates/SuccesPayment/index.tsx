import { Box, Typography } from '@mui/material';
import { FC } from 'react';

import defaultIcon from '../../../assets/images/paymentSuccess.svg';
import { CustomBox, CustomContainer } from '../../Atoms';
import { Image } from '../../Atoms/Image';
import { PaymentData } from '../../molecules/PaymentData';
import { useStyles } from './style';

type Props = {
  iconSrc?: string;
  mainMessage?: string;
  requestNro: string | number;
  customerName: string;
  dataPayment: { key: string; value: string | number }[];
};

export const SuccessPaymentTemplate: FC<Props> = ({
  iconSrc = defaultIcon,
  customerName,
  mainMessage = '¡Tu compra ha sido exitosa!',
  requestNro,
  dataPayment,
}) => {
  const classes = useStyles();

  const renderContent = () => {
    return (
      <Box maxWidth={'50%'} flexGrow={1} px={2}>
        <Typography color={'#3D3F4C'} variant={'body1'} fontWeight={'700'}>
          {mainMessage}
        </Typography>
        <Typography className={classes.paymentContentDesktop} variant={'body3'}>
          Transacción aceptada, número de solicitud: {requestNro}
        </Typography>
        <Typography className={classes.paymentContent} variant={'body3'}>
          <p>Transacción aceptada,</p>
          <p>número de solicitud:</p>
          <p>{requestNro}</p>
        </Typography>
      </Box>
    );
  };

  return (
    <CustomContainer>
      <Box position={'relative'}>
        <CustomBox my={3} display={'flex'} alignItems={'center'}>
          <Image width={'5.9343rem'} src={iconSrc} alt={''} />
          {renderContent()}
        </CustomBox>
        <CustomBox py={'1.875rem'} mb={3}>
          <Typography
            lineHeight={'2em'}
            letterSpacing={'0.009375rem'}
            fontSize={'1.5em'}
            mb={3}
            fontWeight={'bold'}
          >
            Confirmación de pago
          </Typography>
          <Typography color={'#202124'} my={'1.875rem'} variant={'body2'}>
            Estimado(a) {customerName}:
          </Typography>
          <Typography color={'rgba(0, 0, 0, 0.87)'} my={'1.875rem'} variant={'body2'}>
            Tu pago a tráves de nuestro sitio web fue exitoso.
            <br /> Revisa los detalles de la transacción:
          </Typography>
          <PaymentData py={0} data={dataPayment} maxWidth={'450px'} />
        </CustomBox>
      </Box>
    </CustomContainer>
  );
};

import { Button, Card, CardContent, Divider, SvgIcon, Typography } from '@mui/material';
import { FC } from 'react';

import { useStyles } from '../../styles';

interface Props {
  service?: string;
  serviceDate?: string;
  schedule?: string;
  totalPayment?: string;
  form: string;
  token: string;
}

export const DetailService: FC<Props> = ({
  totalPayment,
  form,
  service,
  serviceDate,
  schedule,
  token,
}) => {
  const classes = useStyles();
  return (
    <Card className={classes.containerService}>
      <Typography className={`${classes.fontStyle} ${classes.confirmPayment}`}>
        <SvgIcon style={{ color: '#0000008a' }}>
          <path d="M18 17H6V15H18V17ZM18 13H6V11H18V13ZM18 9H6V7H18V9ZM3 22L4.5 20.5L6 22L7.5 20.5L9 22L10.5 20.5L12 22L13.5 20.5L15 22L16.5 20.5L18 22L19.5 20.5L21 22V2L19.5 3.5L18 2L16.5 3.5L15 2L13.5 3.5L12 2L10.5 3.5L9 2L7.5 3.5L6 2L4.5 3.5L3 2V22Z" />
        </SvgIcon>
        <Typography variant="h2" className={classes.titlePaymentWay}>
          Detalle del servicio
        </Typography>
      </Typography>
      <CardContent className={`${classes.rowInfo} ${classes.detailInfo}  ${classes.marginPrice}`}>
        <div className={classes.titleUser}>
          <Typography>Servicio:</Typography>
          <Typography>Fecha servicio:</Typography>
          <Typography>Horario:</Typography>
          <Typography className={classes.totalPayment}>Total: </Typography>
        </div>
        <div className={classes.infoUser}>
          <Typography>{service ? service : '-'}</Typography>
          <Typography>{serviceDate ? serviceDate : '-'}</Typography>
          <Typography>{schedule ? schedule : '-'}</Typography>
          <Typography className={classes.totalPayment}>${totalPayment} CLP</Typography>
        </div>
      </CardContent>
      <Divider />
      <div className={classes.buttonContainer}>
        <form action={form}>
          <input value={token} name="token_ws" type="hidden" />
          <Button type="submit" variant="contained" className={classes.buttonStyle}>
            CONFIRMAR PAGO
          </Button>
        </form>
      </div>
    </Card>
  );
};

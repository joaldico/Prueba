import CreditCard from '@mui/icons-material/CreditCard';
import Lock from '@mui/icons-material/Lock';
import { Card, Grid, Typography } from '@mui/material';
import React from 'react';

import RadioButton from '../../../../../components/Global/radioButton';
import { PaymentList } from '../../types/PaymentList';

type ChangeEventHandler = React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
import { useStyles } from '../../styles';
interface MyType {
  paymentMethods: PaymentList;
  paymentValue: string;
  handlerChange: ChangeEventHandler;
}

const CardPaymentMethod: React.FC<MyType> = (data: MyType) => {
  const classes = useStyles();
  return (
    <Grid lg={12} md={12} xs={12} className={classes.containerWayPayment}>
      <Card className={`${classes.containerDetail} ${classes.paymentDetail}`}>
        <Typography className={`${classes.fontStyle} ${classes.wayPaymentLabel}`}>
          <CreditCard style={{ color: '#0000008a' }} />{' '}
          <Typography variant="h2" className={classes.titlePaymentWay}>
            Medio de Pago
          </Typography>
        </Typography>
        <RadioButton
          id="radio-list-payment"
          label="radio-list-payment"
          value={data.paymentValue}
          onChange={data.handlerChange}
          itemList={data.paymentMethods}
          classes={classes}
        />
        <Typography className={classes.fontStyle}>
          <Lock style={{ color: '#0000008a' }} />{' '}
          <p className={classes.paymentProtect}>El proceso de pago está protegido </p>
        </Typography>
      </Card>
    </Grid>
  );
};

export default CardPaymentMethod;

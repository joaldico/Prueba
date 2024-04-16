import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  LinearProgress,
  Typography,
} from '@mui/material';
import dayjs from 'dayjs';
import React, { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';

import Car from '../../../assets/images/car.png';
import { Layout } from '../../../components/Layout';
import BusinessUnitParamsContext from '../../../contexts/BusinessUnitParamsContext/businessUnitParamsContext';
import { loginRequest } from '../../../redux/actions';
import { getAuthSelector } from '../../../redux/selectors';
import { paymentService } from '../../../services';
import { GenericError } from '../../../services/types';
import CardPaymentMethod from './component/CardPaymentMethod';
import CardUserComponent from './component/CardUserComponent';
import { DetailService } from './component/DetailService';
import { useStyles } from './styles';
import { PayerData } from './types/PayerData';
import { PaymentList } from './types/PaymentList';
import { ServiceData } from './types/ServiceData';
import { initialUserData, UserData } from './types/UserData';

interface PayloadType {
  tokenPayment: string;
  data: UserData;
  paymentList: PaymentList;
  detailService: ServiceData;
  payerData: PayerData;
}

export const ConfirmPurchase: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { search } = useLocation();
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [formUrl, setFormUrl] = useState<string>('');
  const [paymentValue, setPaymentValue] = useState<string>('');
  const { authToken, pending, error } = useSelector(getAuthSelector);
  const { setTitleState } = useContext(BusinessUnitParamsContext);
  const [payload, setPayload] = useState<PayloadType>({
    tokenPayment: '',
    data: initialUserData(),
    paymentList: [],
    detailService: {},
    payerData: {},
  });

  const searchWs = async (hash: string) => {
    try {
      const searchWs = await paymentService.searchTransactionByHash({
        hash,
      });
      if (searchWs && !(searchWs instanceof GenericError)) {
        return searchWs;
      }
    } catch (err) {
      return;
    }
  };

  const searchPayerInfo = async (
    bu: string | undefined,
    tenant: string | undefined,
    clientId: number | undefined
  ) => {
    try {
      const searchWs = await paymentService.getPayerData({
        bu,
        tenant,
        clientId,
      });
      if (searchWs && !(searchWs instanceof GenericError)) {
        return searchWs;
      }
    } catch (err) {
      return;
    }
  };

  const init = async (hash: string) => {
    setIsLoading(true);
    try {
      const searchTws = await searchWs(hash);

      if (searchTws?.isOrderPaid) {
        return history.replace('/success', {
          searchWs: searchTws,
        });
      }

      const bookingDetails = JSON.parse(searchTws?.tutenOrderPayload.bookingDetails);
      const manualBookingDetails = JSON.parse(searchTws?.tutenOrderPayload.manualBookingDetails);
      const bu = searchTws?.businessUnitId;
      const tenant = searchTws?.tennantId;
      const clientId = bookingDetails?.clientId;
      const dateService = dayjs(bookingDetails.fecha).format('DD/MM/YYYY');
      const expDate = new Date(searchTws!.txExpirationDate).getTime();
      const currentDate = new Date().getTime();

      const payerInfo = await searchPayerInfo(bu, tenant, clientId);

      if (currentDate > expDate) {
        return history.replace('/error/timeout');
      }

      const [data, dataTransBank] = await Promise.all([
        paymentService.webPayValidateAndGet({ hash }),
        paymentService.getUrlTransBank({ hash }),
      ]);

      if (dataTransBank instanceof GenericError || data instanceof GenericError) {
        if (history) history.replace('/error');
        return;
      }
      if (!data || data.name === 'Error' || dataTransBank.name === 'Error') {
        if (history) history.replace('/error');
        return;
      }

      const payment = [{ name: 'Webpay', value: data.paymentType, default: true }];

      const detailService = {
        serviceDate: dateService,
        service: searchTws?.tutenOrderPayload.productName,
        totalPayment: data.data.totalAmountToPay,
        schedule: bookingDetails.fechaRangoInicio + ' - ' + bookingDetails.fechaRangoFin,
      };

      const payerData = {
        fullName: payerInfo?.firstName + ' ' + payerInfo?.lastName,
        documentType: payerInfo?.identificationType,
        documentNumber: payerInfo?.identificationNumber,
        address: manualBookingDetails?.booking.address.principal,
        phone: payerInfo?.mobilePhone,
        email: payerInfo?.email,
      };

      setTitleState(data.data.unitName);
      setFormUrl(dataTransBank.url);
      setPayload({
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        data: data.data,
        tokenPayment: dataTransBank.token,
        paymentList: payment,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        detailService: detailService,
        payerData: payerData,
      });
    } catch (err) {
      console.error(err);
      if (history) history.replace('/error');
      return;
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    dispatch(loginRequest());
  }, []);

  useEffect(() => {
    const hash = new URLSearchParams(search).get('hash');
    if (hash && authToken && !pending) {
      void init(hash);
    }
    if (!hash || error) {
      history.replace('/error');
    }
  }, [authToken]);

  if (isLoading) return <LinearProgress style={{ marginTop: -24 }} color="info" />;

  return (
    <Layout>
      <Container maxWidth={'xl'}>
        <Grid container className={`${classes.containerRoot} ${classes.fontStyle}`}>
          <Grid className={classes.containerTitle} xs={12}>
            <Card className={classes.root}>
              <div className={classes.containerLogo}>
                <CardMedia className={classes.media} image={Car} />
              </div>
              <CardContent>
                <Typography className={classes.titleName}>
                  {' '}
                  ¡Hola {payload.payerData?.fullName}!
                </Typography>
                <Typography className={classes.titleName}>
                  Te damos la bienvenida a nombre de {payload.data?.unitName}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid className={classes.containerPayment}>
            <Typography variant="h1" className={classes.title}>
              Revisa y confirma tu servicio
            </Typography>
          </Grid>
          <Grid className={classes.containerRevision} lg={12} md={12} xs={12}>
            <Grid lg={8} md={12} xs={12}>
              <Grid xs={12}>
                <CardUserComponent {...payload.payerData} classes={classes} />
                <CardPaymentMethod
                  paymentMethods={payload.paymentList}
                  paymentValue={paymentValue}
                  handlerChange={(e) => setPaymentValue(e.target.value)}
                />
              </Grid>
            </Grid>
            <Grid lg={4} md={12} xs={12}>
              <DetailService
                service={payload.detailService?.service}
                serviceDate={payload.detailService?.serviceDate}
                schedule={payload.detailService?.schedule}
                totalPayment={payload.detailService?.totalPayment}
                form={formUrl}
                token={payload.tokenPayment}
              />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};

import { Card, CardContent, Grid, Typography } from '@mui/material';
import React from 'react';

interface MyProps {
  fullName?: string;
  documentNumber?: string;
  classes?: any;
  documentType?: string;
  address?: string;
  phone?: string;
  email?: string;
}

const CardUserComponent: React.FC<MyProps> = (data: MyProps) => {
  const { classes } = data;
  return (
    <Grid lg={12} md={12} xs={12}>
      <Card className={`${classes.containerDetail} ${classes.containerDataUser}`}>
        <Typography variant="h6" className={classes.titlePersonName}>
          {data.fullName}
        </Typography>
        <CardContent className={classes.rowInfo}>
          <div className={classes.textContent}>
            <Typography>Tipo de documento:</Typography>
            <Typography>No. de identificación:</Typography>
            <Typography>Dirección:</Typography>
            <Typography>Teléfono:</Typography>
            <Typography>Correo electrónico:</Typography>
          </div>
          <div className={classes.infoUser}>
            <Typography>{data.documentType ? data.documentType : '-'}</Typography>
            <Typography>{data.documentNumber ? data.documentNumber : '-'}</Typography>
            <Typography>{data.address ? data.address : '-'}</Typography>
            <Typography>{data.phone ? data.phone : '-'}</Typography>
            <Typography>{data.email ? data.email : '-'}</Typography>
          </div>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default CardUserComponent;

import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { Alert, Card, CardContent, CardHeader, Grid, Typography } from '@mui/material';
import React from 'react';

import { useStyles } from './styles';

interface PlanDetailsProps {
  planSelected: any;
}

const PlanDetails: React.FC<PlanDetailsProps> = ({ planSelected }) => {
  const classes = useStyles();

  return (
    <>
      {planSelected.coverages &&
        planSelected.coverages.map((coverage: any) => {
          return (
            <Card key={coverage.coverageId} sx={{ marginTop: 2 }} className={classes.cardTam}>
              <CardHeader
                classes={{ title: classes.title }}
                title={coverage.coverageName}
                className={classes.titleHeader}
              />
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <Typography className={classes.text}>
                      {coverage.overPayment
                        ? `Copago: ${
                            coverage.overPaymentCurrencySymbol
                              ? coverage.overPaymentCurrencySymbol
                              : '$'
                          } ${coverage.overPayment}`
                        : 'Copago: N/A'}
                    </Typography>
                  </Grid>
                  <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    {coverage.hasCoverage ? (
                      <Alert
                        iconMapping={{
                          success: <CheckCircleOutlineIcon fontSize="inherit" />,
                        }}
                        className={classes.alert}
                      >
                        <span className={classes.titleAlert}>Posee coberturas</span>
                      </Alert>
                    ) : (
                      <Alert
                        severity={'error'}
                        iconMapping={{
                          error: <ErrorOutlineIcon fontSize="inherit" />,
                        }}
                        className={classes.alert}
                      >
                        <span className={classes.titleAlert}>No posee coberturas</span>
                      </Alert>
                    )}
                  </Grid>
                </Grid>
                <Typography className={classes.text}>Topes:</Typography>
                <Grid
                  container
                  spacing={1}
                  sx={{ marginTop: '12px', justifyContent: 'space-evenly' }}
                >
                  {coverage.coverageBalances &&
                    coverage.coverageBalances.length > 0 &&
                    coverage.coverageBalances.map((balance: any) => {
                      return (
                        <Grid item xs={12} sm={5} md={5} key={balance.coverageBalanceId}>
                          <Card sx={{ minWidth: 190 }} classes={{ root: classes.cardBalance }}>
                            <CardContent>
                              <Grid container spacing={0}>
                                <Grid item xs={9}>
                                  <Typography
                                    variant="body2"
                                    component="div"
                                    className={classes.titleCoverage}
                                  >
                                    {balance.unitName}
                                  </Typography>
                                  <Typography variant="body2" className={classes.textBody}>
                                    Tope:
                                  </Typography>
                                  <Typography variant="body2" className={classes.textBody}>
                                    Disponibles:
                                  </Typography>
                                  {balance.coverageBalanceCurrencyName && (
                                    <Typography variant="body2" className={classes.textBody}>
                                      Tipo de moneda:
                                    </Typography>
                                  )}
                                  <Typography variant="body2" className={classes.textBody}>
                                    Periodicidad:
                                  </Typography>
                                </Grid>
                                <Grid item xs={3} sx={{ paddingTop: 3 }}>
                                  <Typography variant="body2" className={classes.textBody}>
                                    {balance.limitAmount}
                                  </Typography>
                                  <Typography variant="body2" className={classes.textBody}>
                                    {balance.available}
                                  </Typography>
                                  {balance.coverageBalanceCurrencyName && (
                                    <Typography variant="body2" className={classes.textBody}>
                                      {balance.coverageBalanceCurrencyName}
                                    </Typography>
                                  )}
                                  <Typography variant="body2" className={classes.textBody}>
                                    {balance.periodicity}
                                  </Typography>
                                </Grid>
                              </Grid>
                            </CardContent>
                          </Card>
                        </Grid>
                      );
                    })}
                  {coverage.coverageBalances && coverage.coverageBalances.length === 0 && (
                    <Typography variant="body2" align={'center'}>
                      Este cobertura no tiene topes.
                    </Typography>
                  )}
                </Grid>
                {coverage.observations && coverage.observations.length > 0 && (
                  <>
                    <Typography className={classes.text} sx={{ padding: '16px 0px 16px 0px' }}>
                      Exclusiones
                    </Typography>
                    {coverage.observations.map((observation: any) => {
                      return (
                        <li key={observation} className={classes.textExclusion}>
                          {observation}
                        </li>
                      );
                    })}
                  </>
                )}
              </CardContent>
            </Card>
          );
        })}
    </>
  );
};

export default PlanDetails;

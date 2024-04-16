import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { Alert, Button, Card, CardActions, CardContent, Divider, Stack } from '@mui/material';
import classNames from 'classnames';
import React from 'react';

import FieldTitle from './../../CardsTypeMaterial/Materials/FieldTitle/FieldTitle';
import { useStyles } from './styles';

interface PlansProps {
  cardInfo: any;
  planSelected: any;
  setPlanSelected: any;
  setOpen: any;
}

const Plans: React.FC<PlansProps> = ({ cardInfo, planSelected, setPlanSelected, setOpen }) => {
  const classes = useStyles();

  const onChangeSelected = (event: any, plan: any) => {
    if (planSelected.planRcu !== plan.planRcu) {
      setPlanSelected(plan);
    }
  };

  return (
    <>
      <Card
        classes={{
          root: classNames(
            classes.card,
            planSelected.planRcu === cardInfo.planRcu && classes.isSelected
          ),
        }}
      >
        <CardContent classes={{ root: classes.cardContent }}>
          <FieldTitle
            field={`${cardInfo.planName}`}
            onChangeSelected={(event: any) => {
              onChangeSelected(event, cardInfo);
            }}
            checked={planSelected.planRcu === cardInfo.planRcu}
          />
          {cardInfo.hasCoverage ? (
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
        </CardContent>
        <Divider sx={{ paddingTop: '22px', margin: '-15px' }} />
        <CardActions sx={{ justifyContent: 'center', padding: '16px 0px 0px 0px' }}>
          <Stack spacing={0} direction="row">
            <Button
              variant="text"
              color="secondary"
              onClick={() => {
                setOpen(true);
              }}
              disabled={planSelected.planRcu !== cardInfo.planRcu}
              sx={{ textTransform: 'none' }}
            >
              Ver detalle
            </Button>
          </Stack>
        </CardActions>
      </Card>
    </>
  );
};

export default Plans;

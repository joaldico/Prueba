import { Button, Grid } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';

import { setDescriptionPayload } from '../../../../../../redux/actions/requestActions';
import { isEmpty } from '../../../../../../util/commons';
import { useStyles } from './styles';

interface ButtonsProps {
  handleNext: any;
  handleBack: any;
  handleSubmit: any;
  setErrorDirection: any;
  setErrorDirectionFinal: any;
  watch: any;
}

const Buttons: React.FC<ButtonsProps> = ({
  handleNext,
  handleBack,
  handleSubmit,
  setErrorDirection,
  setErrorDirectionFinal,
  watch,
}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const watchAllFields = watch();

  const handleNextPage = (data: any) => {
    if (isEmpty(data.directionOrigen) && isEmpty(data.directionDestination)) {
      setErrorDirection(true);
      setErrorDirectionFinal(true);
    }

    if (isEmpty(data.directionOrigen)) {
      setErrorDirection(true);
    } else {
      if (isEmpty(data.directionDestination)) {
        setErrorDirectionFinal(true);
      } else {
        dispatch(setDescriptionPayload(data));
        handleNext();
      }
    }
  };

  const onError = () => {
    if (isEmpty(watchAllFields.directionOrigen) && isEmpty(watchAllFields.directionDestination)) {
      setErrorDirection(true);
      setErrorDirectionFinal(true);
    }

    if (isEmpty(watchAllFields.directionOrigen)) {
      setErrorDirection(true);
    } else {
      if (isEmpty(watchAllFields.directionDestination)) {
        setErrorDirectionFinal(true);
      }
    }
  };

  return (
    <Grid container justifyContent="flex-end" gap={2} marginTop={5}>
      <Grid item xs={12} sm={3} md={1}>
        <Button
          onClick={handleBack}
          style={{ textTransform: 'none' }}
          classes={{ root: classes.buttonCancel }}
          fullWidth
        >
          Cancelar
        </Button>
      </Grid>
      <Grid item xs={12} sm={3} md={1}>
        <Button
          onClick={handleSubmit(handleNextPage, onError)}
          style={{ textTransform: 'none' }}
          classes={{ root: classes.buttonSubmit }}
          fullWidth
        >
          Continuar
        </Button>
      </Grid>
    </Grid>
  );
};

export default Buttons;

import { Button, Typography } from '@mui/material';
import moment from 'moment';
import { FC, useEffect } from 'react';

import CircularProgressWithLabel from '../../../../../../components/CircularProgressWithLabel/CircularProgressWithLabel';
import { DATE_FORMAT_HOUR } from '../../../../../../constants/constants';
import { useStyles } from './styles';

type Props = {
  updateProfessional: any;
  uploadTimer: number;
  setUploadTimer: any;
  lastUpdate: any;
};

export const LocationInformation: FC<Props> = ({
  updateProfessional,
  uploadTimer,
  setUploadTimer,
  lastUpdate,
}) => {
  const classes = useStyles();

  useEffect(() => {
    const timer = setInterval(() => {
      setUploadTimer((prevProgress: any) => (prevProgress > 0 ? prevProgress - 1 : 0));
    }, 60000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const getPropsButton = () => {
    if (uploadTimer != 0) {
      return {
        endIcon: <CircularProgressWithLabel value={uploadTimer} />,
      };
    }
  };

  return (
    <div className={classes.container}>
      <Typography className={classes.content}>{`Ultima actualización: ${moment(lastUpdate).format(
        DATE_FORMAT_HOUR
      )}`}</Typography>
      <Button
        className={uploadTimer != 0 ? classes.buttonDisabled : classes.buttonOutlined}
        variant="outlined"
        size="medium"
        onClick={updateProfessional}
        disabled={uploadTimer != 0}
        {...getPropsButton()}
      >
        {'Actualizar ubicación'}
      </Button>
    </div>
  );
};

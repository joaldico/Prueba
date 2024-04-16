import { Close } from '@mui/icons-material';
import { Alert, AlertColor, AlertProps, AlertTitle, Collapse, IconButton } from '@mui/material';
import classNames from 'classnames';
import { FC, useState } from 'react';

import { useStyles } from './styles';

type SimpleAlertProps = AlertProps & {
  type?: AlertColor;
  text: any;
  textTitle?: string;
  fullWidth?: boolean;
  showActions?: boolean;
  classesCustom?: string;
};

const SimpleAlert: FC<SimpleAlertProps> = ({
  type,
  text,
  textTitle,
  iconMapping,
  fullWidth,
  showActions,
  classesCustom,
}) => {
  const classes = useStyles();
  const [open, setOpen] = useState(true);

  const closeAlert = () => {
    setOpen(false);
  };

  const getAlertActions = () => {
    if (showActions) {
      return {
        action: (
          <IconButton aria-label="close" color="inherit" size="small" onClick={closeAlert}>
            <Close fontSize="inherit" />
          </IconButton>
        ),
      };
    }
  };

  return (
    <Collapse in={open}>
      <Alert
        severity={type}
        iconMapping={iconMapping}
        className={classNames(fullWidth ? classes.fullWidth : classes.alert, classesCustom)}
        {...getAlertActions()}
      >
        {textTitle && <AlertTitle>{textTitle}</AlertTitle>}
        {text}
      </Alert>
    </Collapse>
  );
};

export { SimpleAlert };

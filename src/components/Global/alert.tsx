import CloseIcon from '@mui/icons-material/Close';
import { Alert as AlertComponent, AlertTitle } from '@mui/lab';
import { Collapse, IconButton } from '@mui/material';
import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import { useEffect, useState } from 'react';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

interface AlertProps {
  variant?: 'outlined' | 'filled';
  type?: 'error' | 'success' | 'info' | 'warning';
  title?: string;
  body: string;

  onClose?(): void;
}

export default function Alert(props: AlertProps) {
  const classes = useStyles();
  const [open, setOpen] = useState(true);

  useEffect(() => {
    setOpen(true);
  }, []);

  return (
    <div className={classes.root}>
      <Collapse in={open}>
        <AlertComponent
          variant={props.variant}
          severity={props.type}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
                props.onClose && props.onClose();
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          {props.title && <AlertTitle>{props.title}</AlertTitle>}
          {props.body}
        </AlertComponent>
      </Collapse>
    </div>
  );
}

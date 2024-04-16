import CloseIcon from '@mui/icons-material/Close';
import { Alert, AlertTitle } from '@mui/lab';
import { Collapse, IconButton, Snackbar } from '@mui/material';
import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

interface SnackbarAlertProps {
  title: string;
  body: string;
  type: 'error' | 'success' | 'info' | 'warning' | undefined;
  open: boolean;
  onClose: any;
}

export default function SnackbarAlert(props: SnackbarAlertProps): JSX.Element {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        autoHideDuration={6000}
        open={props.open}
        onClose={props.onClose}
      >
        <Collapse in={props.open}>
          <Alert
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  props.onClose(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
            severity={props.type}
            variant="filled"
          >
            <AlertTitle>{props.title}</AlertTitle>
            {props.body}
          </Alert>
        </Collapse>
      </Snackbar>
    </div>
  );
}

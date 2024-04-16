import CloseIcon from '@mui/icons-material/Close';
import { useMediaQuery } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { FC } from 'react';

import { useStyles } from './styles';

type Props = {
  open: boolean;
  title: string;
  body: any;
  cancel?: string;
  confirm: string;
  onCancel: any;
  onConfirm: any;
};
const CustomModal: FC<Props> = ({ open, title, body, cancel, confirm, onCancel, onConfirm }) => {
  const classes = useStyles();
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  return (
    <div>
      <Dialog
        classes={cancel ? { paper: classes.paper } : { paper: classes.paperWithoutCancel }}
        onClose={onCancel}
        aria-labelledby="customized-dialog-title"
        open={open}
        fullWidth
        maxWidth={!cancel ? (isTablet ? 'sm' : 'md') : 'sm'}
      >
        <DialogTitle classes={{ root: classes.dialogTitle }}>{title}</DialogTitle>
        <IconButton
          aria-label="close"
          onClick={onCancel}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent
          dividers
          style={cancel ? { overflowY: 'hidden' } : { overflowY: 'scroll' }}
          classes={
            cancel ? { root: classes.dialogContent } : { root: classes.dialogContentWithoutCancel }
          }
        >
          {!cancel ? (
            body
          ) : (
            <Typography className={classes.textContent} gutterBottom>
              {body}
            </Typography>
          )}
        </DialogContent>
        <DialogActions classes={{ root: classes.dialogActions }}>
          {cancel && (
            <Button
              onClick={onCancel}
              style={{ textTransform: 'none' }}
              classes={{ root: classes.buttonCancel }}
            >
              {cancel}
            </Button>
          )}
          <Button
            onClick={onConfirm}
            style={{ textTransform: 'none' }}
            classes={{ root: classes.buttonSubmit }}
          >
            {confirm}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CustomModal;

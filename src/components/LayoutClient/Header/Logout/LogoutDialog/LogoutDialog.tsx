import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { FC } from 'react';

import { useStyles } from './styles';

type Props = {
  open: boolean;
  handleClose: any;
};
const LogoutDialog: FC<Props> = ({ open, handleClose }) => {
  const classes = useStyles();

  const logout = () => {
    localStorage.clear();
    setTimeout(() => {
      location.reload();
    }, 1000);
  };

  return (
    <div>
      <Dialog
        classes={{ paper: classes.paper }}
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle classes={{ root: classes.dialogTitle }}>Cerrar sesión</DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
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
          style={{ overflowY: 'unset' }}
          classes={{ root: classes.dialogContent }}
        >
          <Typography className={classes.textContent} gutterBottom>
            ¿Estás seguro que deseas cerrar sesión?
          </Typography>
        </DialogContent>
        <DialogActions classes={{ root: classes.dialogActions }}>
          <Button
            onClick={handleClose}
            style={{ textTransform: 'none' }}
            classes={{ root: classes.buttonCancel }}
          >
            Cancelar
          </Button>
          <Button
            onClick={logout}
            style={{ textTransform: 'none' }}
            classes={{ root: classes.buttonSubmit }}
          >
            Aceptar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default LogoutDialog;

import { Link } from '@mui/material';
import { FC } from 'react';
import { useHistory } from 'react-router-dom';

import { RESET_PASSWORD } from '../../../../constants/routes';
import { useStyles } from './styles';

const RecoverPassword: FC = () => {
  const classes = useStyles();
  const history = useHistory();

  const goToResetPassword = () => {
    history.push({ pathname: RESET_PASSWORD });
  };

  return (
    <div>
      Ya existe una cuenta activa con estos datos. Si no recuerdas tu contraseña
      <Link underline="always" className={classes.link} color="inherit" onClick={goToResetPassword}>
        {'haz click aquí.'}
      </Link>
    </div>
  );
};

export default RecoverPassword;

import { Button, Typography } from '@mui/material';
import { useHistory } from 'react-router-dom';

import DevelopedBySection from '../../../../../components/LayoutAuth/DevelopedBySection';
import HeaderLogo from '../../../../../components/LayoutAuth/HeaderLogo';
import HelpSection from '../../../../../components/LayoutAuth/HelpSection';
import { REQUEST_ACCOUNT } from '../../../../../constants/routes';
import { useStyles } from './styles';

const TokenNotValidForm = () => {
  const classes = useStyles();
  const history = useHistory();

  const goToRequestAccount = () => {
    history.push({ pathname: REQUEST_ACCOUNT });
  };

  return (
    <>
      <HeaderLogo />

      <div className={classes.containerTitle}>
        <Typography className={classes.title}>{'Tu token ya no es válido'}</Typography>
        <Typography className={classes.subTitle}>
          {'Si deseas realizar la solicitud nuevamente, haz click en el botón de solicitar cuenta:'}
        </Typography>

        <Button
          className={classes.button}
          variant="contained"
          size="medium"
          onClick={goToRequestAccount}
        >
          {'Solicitar cuenta'}
        </Button>
      </div>

      <HelpSection />

      <DevelopedBySection />
    </>
  );
};

export default TokenNotValidForm;

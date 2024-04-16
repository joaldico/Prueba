import PhoneIcon from '@mui/icons-material/Phone';
import { useContext } from 'react';

import BusinessUnitParamsContext from '../../../../contexts/BusinessUnitParamsContext/businessUnitParamsContext';
import { handleContactPhoneNumber } from '../../../../util/commons';
import { useStyles } from './styles';

const Footer = () => {
  const classes = useStyles();
  const { portalConfigParams } = useContext(BusinessUnitParamsContext);
  const { contact_phone } = portalConfigParams!;

  return (
    <div className={classes.root}>
      <div className={classes.contactContainer}>
        <div className={classes.text}>¿Necesitas ayuda? Comunicate al:</div>
        <div className={classes.phone}>
          <PhoneIcon className={classes.icon} />
          {handleContactPhoneNumber(contact_phone)}.
        </div>
      </div>
    </div>
  );
};

export default Footer;

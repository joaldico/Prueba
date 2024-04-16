import { useContext } from 'react';

import { LOGO_DEFAULT } from '../../../constants/constants';
import * as route from '../../../constants/routes';
import BusinessUnitParamsContext from '../../../contexts/BusinessUnitParamsContext/businessUnitParamsContext';
import { handleContactPhoneNumber } from '../../../util/commons';
import { Image } from '../../Atoms/Image';
import FooterLinks from './FooterLinks/index';
import { useStyles } from './styles';

const Footer = () => {
  const classes = useStyles();
  const { logoUrl, portalConfigParams } = useContext(BusinessUnitParamsContext);
  const { contact_phone } = portalConfigParams!;

  return (
    <div className={classes.rootMobile}>
      <div className={classes.root}>
        <div className={classes.containerFooter}>
          <div className={classes.subTitleContainer}>
            <div className={classes.title}>¿Tienes dudas?</div>
            <div className={classes.contactContainer}>
              <div className={classes.subTitle}>
                Si necesitas más información, contáctanos llamando al
              </div>
              <div className={classes.contact}>{handleContactPhoneNumber(contact_phone)}.</div>
            </div>
          </div>
          <FooterLinks isHiddenMobile />
        </div>
        <div>
          <div className={classes.imageContainer}>
            <Image
              src={logoUrl ? logoUrl : LOGO_DEFAULT}
              maxWidth={'78.69px'}
              className={'pointer'}
              onClick={() => window.location.replace(route.HOME)}
            />
          </div>
        </div>
      </div>
      <FooterLinks isHiddenDesktop />
    </div>
  );
};

export default Footer;

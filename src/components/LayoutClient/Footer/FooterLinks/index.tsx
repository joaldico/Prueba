import { Link } from '@mui/material';
import classNames from 'classnames';
import { FC, useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { getExistsFooterLinks } from '../../../../api/api';
import {
  CONTACT_US,
  FREQUENT_QUESTIONS,
  LEGAL_NOTICES,
  TERMS_AND_CONDITIONS,
} from '../../../../constants/routes';
import BusinessUnitParamsContext from '../../../../contexts/BusinessUnitParamsContext/businessUnitParamsContext';
import { isEmpty } from '../../../../util/commons';
import { useStyles } from './styles';

type Props = {
  isHiddenMobile?: boolean;
  isHiddenDesktop?: boolean;
};
const FooterLinks: FC<Props> = ({ isHiddenMobile, isHiddenDesktop }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const { portalConfigParams } = useContext(BusinessUnitParamsContext);
  const [showLink, setShowLink] = useState({
    legalNotices: false,
    question: false,
    termsConditions: false,
  });

  useEffect(() => {
    const init = async () => {
      try {
        if (!isEmpty(portalConfigParams?.businessUnitUUID)) {
          const response = await getExistsFooterLinks(portalConfigParams?.businessUnitUUID);
          setShowLink(response);
        }
      } catch (error) {
        console.error(error);
      }
    };
    init();
  }, [portalConfigParams]);

  return (
    <div
      className={classNames(
        classes.linkContainer,
        isHiddenMobile && classes.hiddenMobile,
        isHiddenDesktop && classes.isHiddenDesktop
      )}
    >
      {showLink.termsConditions && (
        <Link className={classes.link} underline="hover" href={TERMS_AND_CONDITIONS}>
          {t('Términos y condiciones')}
        </Link>
      )}
      {showLink.legalNotices && (
        <Link className={classes.link} underline={'hover'} href={LEGAL_NOTICES}>
          {t('Avisos legales')}
        </Link>
      )}
      <Link className={classes.link} underline={'hover'} href={CONTACT_US} target={'_blank'}>
        {t('Contáctanos')}
      </Link>
      {showLink.question && (
        <Link className={classes.link} underline={'hover'} href={FREQUENT_QUESTIONS}>
          {t('Preguntas frecuentes')}
        </Link>
      )}
    </div>
  );
};

export default FooterLinks;

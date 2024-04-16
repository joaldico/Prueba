import CallIcon from '@mui/icons-material/Call';
import PhoneForwardedIcon from '@mui/icons-material/PhoneForwarded';
import { Box, Button, Divider, Link, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useContext } from 'react';
import { useTranslation } from 'react-i18next';

import BusinessUnitParamsContext from '../../../contexts/BusinessUnitParamsContext/businessUnitParamsContext';
import { useStyles } from './styles';

const Footer = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const theme = useTheme();
  const smallSize = useMediaQuery(theme.breakpoints.down('sm'));
  const { contactChannelPhone } = useContext(BusinessUnitParamsContext);

  return (
    <Box className={classes.root}>
      <Divider />
      <Box className={classes.alertContainer}>
        {smallSize ? (
          <Box className={classes.boxContainer}>
            <Typography className={classes.initialText}>
              {t('portalPublic.layout.footer.text.mobile')}
            </Typography>
            <Button
              variant={'outlined'}
              className={classes.buttonMobile}
              size={'small'}
              endIcon={<PhoneForwardedIcon />}
              sx={{ textTransform: 'none' }}
            >
              <Link href={`tel:${contactChannelPhone}`} className={classes.linkButton}>
                {t('portalPublic.layout.footer.number.mobile')}
              </Link>
            </Button>
          </Box>
        ) : (
          <Box className={classes.boxContainer}>
            <Typography className={classes.initialText}>
              {t('portalPublic.layout.footer.text')}
            </Typography>
            <CallIcon className={classes.phoneIcon} />
            <Typography className={classes.phoneNumber}>
              {contactChannelPhone ? contactChannelPhone : t('portalPublic.layout.footer.number')}
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Footer;

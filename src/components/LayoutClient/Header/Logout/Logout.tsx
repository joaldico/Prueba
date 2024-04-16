import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from '@mui/material';
import classNames from 'classnames';
import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';

import LogoutDialog from './LogoutDialog/LogoutDialog';
import { useStyles } from './styles';

type Props = {
  isHiddenMobile?: boolean;
  isHiddenDesktop?: boolean;
};
const Logout: FC<Props> = ({ isHiddenMobile, isHiddenDesktop }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <LogoutDialog open={open} handleClose={handleClose} />
      <div
        className={classNames(
          classes.linkContainer,
          isHiddenMobile && classes.hiddenMobile,
          isHiddenDesktop && classes.isHiddenDesktop
        )}
        onClick={handleClickOpen}
      >
        <Link className={classes.link} underline="hover" onClick={handleClickOpen}>
          {t('Cerrar sesión')}
        </Link>
        <ArrowForwardIcon className={classes.icon} />
      </div>
    </>
  );
};

export default Logout;

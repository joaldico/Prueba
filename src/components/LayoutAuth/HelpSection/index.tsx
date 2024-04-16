import { Link, Typography } from '@mui/material';
import classNames from 'classnames';
import { FC, useContext } from 'react';

import BusinessUnitParamsContext from '../../../contexts/BusinessUnitParamsContext/businessUnitParamsContext';
import { useStyles } from './styles';

type Props = {
  withPaddingBottom?: boolean;
};

const HelpSection: FC<Props> = ({ withPaddingBottom }) => {
  const { contactChannelPhone } = useContext(BusinessUnitParamsContext);
  const classes = useStyles();
  return (
    <div
      className={classNames(classes.containerHelp, withPaddingBottom && classes.withPaddingBottom)}
    >
      <Typography className={classes.description}>{'¿Necesitas ayuda?'}</Typography>
      <Link underline="none" className={classes.link} color="inherit">
        {`Llámanos al ${contactChannelPhone}`}
      </Link>
    </div>
  );
};

HelpSection.defaultProps = {
  withPaddingBottom: true,
};

export default HelpSection;

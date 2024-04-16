import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { FC } from 'react';

import { useStyles } from './styles';

type DividerAccordionProps = {
  // eslint-disable-next-line
  children?: any;
  expanded?: any;
  onClick?: any;
};

const DividerAccordion: FC<DividerAccordionProps> = ({ children, expanded, onClick }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.border} />
      <span className={classes.content} onClick={onClick}>
        {expanded ? <ExpandLess /> : <ExpandMore />}
        {children}
      </span>
    </div>
  );
};
export default DividerAccordion;

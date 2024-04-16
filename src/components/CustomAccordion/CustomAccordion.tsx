import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import classNames from 'classnames';
import { FC } from 'react';

import { useStyles } from './styles';

type Props = {
  title: string;
  detailsChildren: any;
  defaultExpanded?: boolean;
  expanded?: boolean;
  expandIcon?: any;
};

const CustomAccordion: FC<Props> = ({
  title,
  detailsChildren,
  defaultExpanded,
  expanded,
  expandIcon,
}) => {
  const classes = useStyles();

  return (
    <Accordion className={classes.item} defaultExpanded={defaultExpanded} expanded={expanded}>
      <AccordionSummary
        classes={{ root: classes.root, content: classes.content }}
        className={classNames(classes.title, expandIcon == null && classes.cursorDefault)}
        expandIcon={expandIcon}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography className={classes.text} variant={'subtitle1'}>
          {title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>{detailsChildren}</AccordionDetails>
    </Accordion>
  );
};

CustomAccordion.defaultProps = {
  defaultExpanded: true,
  expanded: true,
  expandIcon: null,
};

export default CustomAccordion;

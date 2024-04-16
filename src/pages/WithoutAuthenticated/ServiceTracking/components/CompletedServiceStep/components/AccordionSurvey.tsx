import { Accordion, AccordionSummary } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { FC } from 'react';

import { useStyles } from './styles';

type Props = {
  isDesktop: boolean;
  isTablet: boolean;
  isMobile?: boolean;
  children: any;
  typeSurvey: number;
};

const AccodionSurvey: FC<Props> = ({ isDesktop, isTablet, isMobile, children, typeSurvey }) => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Accordion
      expanded={true}
      disableGutters={true}
      sx={{
        borderRadius: '15px !important',
        marginBottom: typeSurvey === 1 ? '25px' : '0px',
        marginTop: typeSurvey === 2 ? '40px' : '0px',
      }}
    >
      <AccordionSummary
        sx={{
          backgroundColor: `${theme.palette.primary.light} !important`,
          borderTopLeftRadius: '15px !important',
          borderTopRightRadius: '15px !important',
          borderBottomLeftRadius: '15px !important',
          borderBottomRightRadius: '15px !important',
        }}
        aria-controls="panel1a-content"
        id="panel1a-header"
        className={
          isDesktop
            ? classes.accordionSummarySurveySizeDesktop
            : isTablet
            ? classes.accordionSummarySurveySizeTablet
            : isMobile
            ? classes.accordionSummarySurveySizeMobile
            : ''
        }
      >
        {children}
      </AccordionSummary>
    </Accordion>
  );
};

export default AccodionSurvey;

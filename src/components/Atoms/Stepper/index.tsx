import { Check } from '@mui/icons-material';
import { StepConnector, StepIconProps, useMediaQuery, useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import Typography from '@mui/material/Typography';
import { ReactNode } from 'react';

import { StepObject } from './models/StepObject';
import { useStyles } from './styles';

type StepperProps = {
  steps?: Array<StepObject>;
  activeStep: number;
} & typeof defaultProps;

const defaultProps = {
  steps: [
    { id: 1, text: 'Step 1', optional: false, visible: true },
    { id: 2, text: 'Step 2', optional: false, visible: true },
    { id: 3, text: 'Step 3', optional: false, visible: true },
  ],
};

const ServiceStepper = (props: StepperProps) => {
  const { steps, activeStep } = props;
  const classes = useStyles();
  const theme = useTheme();
  const smallSize = useMediaQuery(theme.breakpoints.down('sm'));

  const isStepOptional = (optional: boolean) => {
    return optional === true;
  };

  function QontoStepIcon(props: StepIconProps) {
    const { active, completed } = props;

    return (
      <div className={classes.qontoStepIconRoot}>
        {completed ? (
          <Check className="QontoStepIcon-completedIcon" />
        ) : active ? (
          <div className="QontoStepIcon-circle" />
        ) : (
          <div className="QontoStepIcon-circle-disabled" />
        )}
      </div>
    );
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper
        alternativeLabel={!smallSize}
        activeStep={activeStep}
        connector={
          <StepConnector
            className={
              activeStep === 4
                ? classes.qontoStepConnectorLast
                : activeStep > 4
                ? classes.qontoStepConnectorAllCompleted
                : classes.qontoStepConnector
            }
          />
        }
        className={
          activeStep === 0
            ? classes.stepperRootInitial
            : activeStep === 4
            ? classes.stepperRootLast
            : activeStep > 4
            ? classes.stepperRootAllCompleted
            : classes.stepperRoot
        }
        sx={{
          '& .MuiStepLabel-alternativeLabel': {
            marginTop: '0px !important',
          },
        }}
      >
        {steps.map(({ text, optional, visible }, label) => {
          const stepProps: { completed?: boolean } = {};
          const labelProps: {
            optional?: ReactNode;
          } = {};
          if (isStepOptional(optional)) {
            labelProps.optional = <Typography variant="caption">Optional</Typography>;
          }
          return (
            visible && (
              <Step key={label} {...stepProps} className={classes.root}>
                <StepLabel
                  {...labelProps}
                  StepIconComponent={QontoStepIcon}
                  className={classes.label}
                >
                  {text}
                </StepLabel>
              </Step>
            )
          );
        })}
      </Stepper>
    </Box>
  );
};

ServiceStepper.defaultProps = defaultProps;

export default ServiceStepper;

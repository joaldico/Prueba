import 'moment-timezone';

import { Chip, Grid, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { FC, useContext } from 'react';

import CustomAccordion from '../../../../../components/CustomAccordion/CustomAccordion';
import { ServiceData } from '../../../../../models/ServiceDataModel';
import { ServiceInformationContent } from '../OnTheWayServiceStep/ServiceInformation/ServiceInformationContent/ServiceInformationContent';
import { useStyles } from './styles';

type Props = {
  serviceData: ServiceData | undefined;
};

export const CanceledServiceStep: FC<Props> = ({ serviceData }) => {
  const theme = useTheme();
  const classes = useStyles();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'lg'));
  const isMobile = useMediaQuery(theme.breakpoints.only('xs'));
  const idProfessional = serviceData ? serviceData.idProfessional : null;
  const idProvider = serviceData ? serviceData.idProvider : null;

  return (
    <CustomAccordion
      title={'Información del servicio'}
      detailsChildren={
        <>
          {isDesktop && (
            <>
              <ServiceInformationContent
                idProfessional={idProfessional}
                idProvider={idProvider}
                customColumnsChipDesktop={12}
                cancelServiceDate={serviceData?.cancellationDate || ''}
                customComponent={
                  <Chip
                    label={serviceData?.state}
                    color="primary"
                    variant="outlined"
                    sx={{ background: 'rgba(63, 81, 181, 0.08)', border: 'none' }}
                  />
                }
              />
            </>
          )}
          {(isTablet || isMobile) && (
            <>
              <Grid
                container
                direction="row"
                justifyContent="flex-end"
                alignItems="center"
                sx={isTablet ? { marginTop: '12px' } : isMobile ? { marginTop: '10px' } : {}}
              >
                <Grid item xs={12} className={classes.chipContainer}>
                  <Chip
                    label={serviceData?.state}
                    color="primary"
                    variant="outlined"
                    sx={{ background: 'rgba(63, 81, 181, 0.08)', border: 'none' }}
                  />
                </Grid>
              </Grid>

              <ServiceInformationContent
                idProfessional={idProfessional}
                idProvider={idProvider}
                cancelServiceDate={serviceData?.cancellationDate || ''}
              />
            </>
          )}
        </>
      }
    />
  );
};

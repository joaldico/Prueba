import { Typography } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';

import SearchInput from '../../../../components/Atoms/SearchComponent';
import BusinessUnitParamsContext from '../../../../contexts/BusinessUnitParamsContext/businessUnitParamsContext';
import { handleContactPhoneNumber } from '../../../../util/commons';
import { useStyles } from './styles';

interface WelcomeSectionProps {
  setTerm: any;
}

const WelcomeSection: React.FC<WelcomeSectionProps> = ({ setTerm }) => {
  const classes = useStyles();
  const { portalConfigParams } = useContext(BusinessUnitParamsContext);
  const { categories, contact_phone, cover_image_url, cover_description } = portalConfigParams!;
  const [allServices, setAllServices] = useState<any[]>([]);
  const [serviceSearch, setServiceSearch] = useState('');

  useEffect(() => {
    if (categories.length > 0) {
      const uniqueServices = categories.reduce((accumulator: any, category) => {
        category.services.forEach((service: any) => {
          if (!accumulator[service?.label]) {
            accumulator[service.label] = service;
          }
        });
        return accumulator;
      }, {});

      const newServices = Object.values(uniqueServices).sort((a: any, b: any) =>
        a.label.localeCompare(b.label)
      );

      setAllServices(newServices);
    }
  }, [categories]);

  useEffect(() => {
    setTerm(serviceSearch);
  }, [serviceSearch]);

  return (
    <>
      <div className={classes.root}>
        <div className={classes.container} style={{ backgroundImage: `url(${cover_image_url})` }}>
          <div className={classes.leftColumn}>
            <div className={classes.titleContainer}>
              <Typography className={classes.title}>{cover_description}</Typography>
            </div>
          </div>
          <div className={classes.gradient}></div>
        </div>
      </div>
      <div
        className={`${classes.colorBlock} ${
          categories && categories.length === 0 && classes.noServicesPadding
        }`}
      >
        {categories && categories.length > 0 ? (
          <>
            <Typography className={classes.welcomeTitle}>{'¡Te damos la bienvenida!'}</Typography>
            <Typography className={classes.welcomeSubtitle}>
              {'Selecciona el tipo de asistencia que necesitas:'}
            </Typography>
            <div className={classes.searchInputContainer}>
              <SearchInput
                options={allServices}
                serviceSearch={serviceSearch}
                setServiceSearch={setServiceSearch}
              />
            </div>
          </>
        ) : (
          <>
            <Typography className={classes.noServicesTitle}>
              {`En este momento deberás gestionar tus servicio contactándote con nosotros al ${handleContactPhoneNumber(
                contact_phone
              )}.`}
            </Typography>
            <div className={classes.noServicesSubtitleContainer}>
              <Typography className={classes.noServicesSubtitle}>
                {'Estaremos felices de atenderte.'}
              </Typography>
              <Typography className={classes.noServicesSubtitle}>
                {'¡Gracias por confiar en nosotros!'}
              </Typography>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default WelcomeSection;

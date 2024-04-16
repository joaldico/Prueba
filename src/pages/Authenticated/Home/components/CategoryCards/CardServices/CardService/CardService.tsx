import { Card, CardContent, Tooltip, Typography } from '@mui/material';
import classNames from 'classnames';
import React, { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import CustomModal from '../../../../../../../components/CustomModal';
import BusinessUnitParamsContext from '../../../../../../../contexts/BusinessUnitParamsContext/businessUnitParamsContext';
import { setServiceName } from '../../../../../../../redux/actions/requestActions';
import { handleContactPhoneNumber } from '../../../../../../../util/commons';
import { useStyles } from './styles';
interface CategoriesProps {
  service: any;
  category: any;
}

const CardService: React.FC<CategoriesProps> = ({ service, category }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();
  const { portalConfigParams } = useContext(BusinessUnitParamsContext);
  const { contact_phone } = portalConfigParams!;
  const history = useHistory();
  const dispatch = useDispatch();

  const bodyModal = (
    <p>
      {t('Seleccionaste el servicio de')} <strong>{service.label}</strong> {t('de')} {category.name}
      {','}
      <br />
      {t(' ¿estás seguro que deseas continuar con la solicitud?')}
    </p>
  );
  const isActive = service.active;

  const handleOpenModal = () => {
    if (isActive) {
      setOpen(true);
    }
  };

  const getTooltipComponent = (children: any) => {
    if (isActive) {
      return children;
    } else {
      return (
        <Tooltip
          title={`Este servicio debe realizarse vía telefónica llamando al ${handleContactPhoneNumber(
            contact_phone
          )}`}
          arrow
        >
          {children}
        </Tooltip>
      );
    }
  };

  return (
    <Card className={classNames(classes.card, isActive ? classes.cardPointer : '')}>
      <CustomModal
        open={open}
        title={t('Solicitud de asistencia')}
        body={bodyModal}
        cancel={t('Cancelar')}
        confirm={t('Continuar')}
        onCancel={() => {
          setOpen(false);
        }}
        onConfirm={() => {
          dispatch(setServiceName(service.label));
          history.push(`/assistance-request/${service.service_id}`);
        }}
      />
      <div onClick={handleOpenModal}>
        <CardContent>
          {getTooltipComponent(
            <Typography
              variant="body1"
              color="textPrimary"
              className={isActive ? classes.serviceName : classes.serviceNameDisabled}
            >
              {service.label}
            </Typography>
          )}
        </CardContent>
      </div>
    </Card>
  );
};

export default CardService;

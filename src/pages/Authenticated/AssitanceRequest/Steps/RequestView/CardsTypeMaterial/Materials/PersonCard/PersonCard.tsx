import { Card, CardContent, Tooltip } from '@mui/material';
import classNames from 'classnames';
import React, { useContext, useState } from 'react';

import BusinessUnitParamsContext from '../../../../../../../../contexts/BusinessUnitParamsContext/businessUnitParamsContext';
import { handleContactPhoneNumber } from '../../../../../../../../util/commons';
import Field from '../Field/Field';
import FieldTitle from '../FieldTitle/FieldTitle';
import { useStyles } from './styles';

interface PersonProps {
  cardInfo: any;
  selected: boolean;
  materialSelected: any;
  setMaterialSelected: any;
}

const PersonCard: React.FC<PersonProps> = ({
  cardInfo,
  selected,
  materialSelected,
  setMaterialSelected,
}) => {
  const classes = useStyles();
  const { portalConfigParams } = useContext(BusinessUnitParamsContext);
  const { contact_phone } = portalConfigParams!;

  const getTooltipComponent = (children: any) => {
    if (cardInfo.active) {
      return children;
    } else {
      return (
        <Tooltip
          placement="top"
          title={`Si deseas seleccionar esta opción, comunícate al número de contacto ${handleContactPhoneNumber(
            contact_phone
          )}`}
          arrow
        >
          {children}
        </Tooltip>
      );
    }
  };

  const getIdentificationType = () => {
    if (cardInfo.identificationType) {
      return (
        cardInfo.identificationType.charAt(0).toUpperCase() +
        cardInfo.identificationType.slice(1).toLowerCase()
      );
    } else {
      return '';
    }
  };

  const onChangeSelected = (event: any, material: any) => {
    if (materialSelected.id !== material.id) {
      setMaterialSelected(material);
    }
  };

  return (
    <>
      {getTooltipComponent(
        <Card
          classes={{
            root: classNames(
              classes.card,
              (materialSelected.id === cardInfo.id || selected) && classes.isSelected
            ),
          }}
        >
          <CardContent classes={{ root: classes.cardContent }}>
            <FieldTitle
              field={'Persona: '}
              isDisabled={!cardInfo.active}
              onChangeSelected={(event: any) => {
                onChangeSelected(event, cardInfo);
              }}
              checked={materialSelected.id === cardInfo.id || selected}
            />
            <Field field={'Nombre: '} value={cardInfo.firstName} isDisabled={!cardInfo.active} />
            <Field field={'Apellido: '} value={cardInfo.lastName} isDisabled={!cardInfo.active} />
            <Field
              field={'Tipo de documento: '}
              value={getIdentificationType()}
              isDisabled={!cardInfo.active}
            />
            <Field
              field={'No. documento: '}
              value={cardInfo.identificationNumber}
              isDisabled={!cardInfo.active}
            />
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default PersonCard;

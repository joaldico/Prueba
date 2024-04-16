import { Card, CardContent, Tooltip } from '@mui/material';
import classNames from 'classnames';
import React, { useContext, useState } from 'react';

import BusinessUnitParamsContext from '../../../../../../../../contexts/BusinessUnitParamsContext/businessUnitParamsContext';
import { handleContactPhoneNumber } from '../../../../../../../../util/commons';
import Field from '../Field/Field';
import FieldTitle from '../FieldTitle/FieldTitle';
import { useStyles } from './styles';

interface PetProps {
  cardInfo: any;
  selected: boolean;
  materialSelected: any;
  setMaterialSelected: any;
}

const PetCard: React.FC<PetProps> = ({
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
              field={'Mascota: '}
              isDisabled={!cardInfo.active}
              onChangeSelected={(event: any) => {
                onChangeSelected(event, cardInfo);
              }}
              checked={materialSelected.id === cardInfo.id || selected}
            />
            <Field
              field={'Nombre: '}
              value={cardInfo.petName}
              isDisabled={!cardInfo.active}
              isSmall
            />
            <Field field={'Tipo: '} value={cardInfo.type} isDisabled={!cardInfo.active} isSmall />
            <Field
              field={'Raza: '}
              value={cardInfo.petBreed}
              isDisabled={!cardInfo.active}
              isSmall
            />
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default PetCard;

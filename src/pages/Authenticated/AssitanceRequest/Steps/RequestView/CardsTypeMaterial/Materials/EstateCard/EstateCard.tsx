import { Card, CardContent, Tooltip } from '@mui/material';
import classNames from 'classnames';
import React, { useContext, useState } from 'react';

import BusinessUnitParamsContext from '../../../../../../../../contexts/BusinessUnitParamsContext/businessUnitParamsContext';
import { handleContactPhoneNumber } from '../../../../../../../../util/commons';
import Field from '../Field/Field';
import FieldTitle from '../FieldTitle/FieldTitle';
import { useStyles } from './styles';

interface EstateProps {
  cardInfo: any;
  selected: boolean;
  materialSelected: any;
  setMaterialSelected: any;
}

const EstateCard: React.FC<EstateProps> = ({
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

  const getHomeType = () => {
    return cardInfo.homeTypeId === 2 ? 'Departamento' : 'Casa';
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
              field={'Inmueble: '}
              isDisabled={!cardInfo.active}
              onChangeSelected={(event: any) => {
                onChangeSelected(event, cardInfo);
              }}
              checked={materialSelected.id === cardInfo.id || selected}
            />
            <Field field={'Tipo: '} value={getHomeType()} isDisabled={!cardInfo.active} isSmall />
            <Field
              field={'Dirección: '}
              value={cardInfo.address}
              isDisabled={!cardInfo.active}
              isSmall
            />
            <Field
              field={'Numeración: '}
              value={cardInfo.postalCode}
              isDisabled={!cardInfo.active}
              isSmall
            />
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default EstateCard;

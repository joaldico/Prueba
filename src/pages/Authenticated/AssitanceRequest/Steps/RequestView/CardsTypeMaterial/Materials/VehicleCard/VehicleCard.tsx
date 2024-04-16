import { Card, CardContent, Tooltip } from '@mui/material';
import classNames from 'classnames';
import React, { useContext } from 'react';

import BusinessUnitParamsContext from '../../../../../../../../contexts/BusinessUnitParamsContext/businessUnitParamsContext';
import { handleContactPhoneNumber } from '../../../../../../../../util/commons';
import Field from '../Field/Field';
import FieldTitle from '../FieldTitle/FieldTitle';
import { useStyles } from './styles';

interface VehicleProps {
  cardInfo: any;
  selected: boolean;
  materialSelected: any;
  setMaterialSelected: any;
}

const VehicleCard: React.FC<VehicleProps> = ({
  cardInfo,
  selected,
  materialSelected,
  setMaterialSelected,
}) => {
  const classes = useStyles();
  const { portalConfigParams } = useContext(BusinessUnitParamsContext);
  const { contact_phone } = portalConfigParams!;

  const getPatentField = () => {
    const patent = cardInfo.patentPlate ? cardInfo.patentPlate : '-';
    const vin = cardInfo.vin ? cardInfo.vin : '-';
    const engineNumber = cardInfo.engineNumber ? cardInfo.engineNumber : '-';
    return `${patent}/${vin}/${engineNumber}`;
  };

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
              field={'Vehículo: '}
              isDisabled={!cardInfo.active}
              onChangeSelected={(event: any) => {
                onChangeSelected(event, cardInfo);
              }}
              checked={materialSelected.id === cardInfo.id || selected}
            />
            <Field field={'Marca: '} value={cardInfo.brand} isDisabled={!cardInfo.active} />
            <Field field={'Modelo: '} value={cardInfo.model} isDisabled={!cardInfo.active} />
            <Field field={'Color: '} value={cardInfo.color} isDisabled={!cardInfo.active} />
            <Field
              field={'Patente/VIN/Motor: '}
              value={getPatentField()}
              isDisabled={!cardInfo.active}
            />
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default VehicleCard;

import { Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import React, { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { getCoverageByService } from '../../../../../../api/api';
import CustomModal from '../../../../../../components/CustomModal';
import {
  ESTATE_MATERIAL,
  MAX_NUMBER_MATERIALS_DEFAULT,
  MAX_NUMBER_PLANS_DEFAULT,
  PET_MATERIAL,
  VEHICLE_MATERIAL,
} from '../../../../../../constants/constants';
import BusinessUnitParamsContext from '../../../../../../contexts/BusinessUnitParamsContext/businessUnitParamsContext';
import { isEmpty } from '../../../../../../util/commons';
import ShowMoreMaterials from '../CardsTypeMaterial/Materials/ShowMoreMaterials/ShowMoreMaterials';
import RequestService from '../RequestService/RequestService';
import PlanDetails from './PlanDetails/PlanDetails';
import Plans from './Plans/Plans';
import { useStyles } from './styles';

interface CardsPlanProps {
  materialSelected: any;
  planSelected: any;
  setPlanSelected: any;
  serviceId: string;
  selectedCard: string;
}

const CardsPlan: React.FC<CardsPlanProps> = ({
  materialSelected,
  planSelected,
  setPlanSelected,
  serviceId,
  selectedCard,
}) => {
  const classes = useStyles();
  const [plans, setPlans] = useState([]);
  const [showMore, setShowMore] = useState(false);
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.only('xs'));
  const { businessUnitUUID } = useContext(BusinessUnitParamsContext);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  const getPlans = (plans: any) => {
    if (showMore) {
      return plans;
    } else {
      return plans?.slice(0, MAX_NUMBER_MATERIALS_DEFAULT);
    }
  };

  const arrayToString = (array: any) => {
    let string = '';
    array.forEach((element: any, index: number) => {
      string += element;
      if (index !== array.length - 1) {
        string += ',';
      }
    });
    return string;
  };

  useEffect(() => {
    const getCoverageByServiceAndMaterial = async () => {
      const materialType =
        selectedCard === VEHICLE_MATERIAL
          ? '1'
          : selectedCard === ESTATE_MATERIAL
          ? '2'
          : selectedCard === PET_MATERIAL
          ? '4'
          : '3';
      await getCoverageByService(
        serviceId,
        materialType,
        materialSelected.id,
        arrayToString(materialSelected.planSubscriptionIds),
        businessUnitUUID
      ).then((response: any) => {
        setPlans(response);
      });
    };
    getCoverageByServiceAndMaterial();
  }, [materialSelected]);

  useEffect(() => {
    if (plans.length === 1) {
      setPlanSelected(plans[0]);
    }
  }, [plans]);

  const getTitleByMaterialType = () => {
    let materialTitle = '';

    materialSelected.petName ? (materialTitle = materialSelected.petName) : '';
    materialSelected.address ? (materialTitle = materialSelected.address) : '';
    materialSelected.model ? (materialTitle = materialSelected.model) : '';
    materialSelected.firstName ? (materialTitle = materialSelected.firstName) : '';

    if (isEmpty(materialTitle)) {
      return '';
    } else {
      return (
        <Typography className={classes.subTitle} color="textPrimary" variant={'body1'}>
          {`Planes disponibles para ${materialTitle}:`}
        </Typography>
      );
    }
  };

  return (
    <>
      <div>{getTitleByMaterialType()}</div>
      {plans.length === 0 && <RequestService />}
      <div className={classes.plansContainer}>
        {getPlans(plans).map((plan: any, index: number) => (
          <div key={`plan-${index}`}>
            <Plans
              cardInfo={plan}
              planSelected={planSelected}
              setPlanSelected={setPlanSelected}
              setOpen={setOpen}
            />
          </div>
        ))}
      </div>
      {plans.length > MAX_NUMBER_PLANS_DEFAULT && (
        <ShowMoreMaterials showMore={showMore} handleShowMore={handleShowMore} />
      )}
      {!isMobile ? (
        <CustomModal
          open={open}
          title={t('Información de cobertura')}
          body={<PlanDetails planSelected={planSelected} />}
          confirm={t('Aceptar')}
          onCancel={() => {
            setOpen(false);
          }}
          onConfirm={() => {
            setOpen(false);
          }}
        />
      ) : (
        open && <PlanDetails planSelected={planSelected} />
      )}
    </>
  );
};

export default CardsPlan;

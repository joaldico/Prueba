import { Typography } from '@mui/material';
import { FC, useEffect, useState } from 'react';

import {
  ESTATE_MATERIAL,
  MAX_NUMBER_MATERIALS_DEFAULT,
  PERSON_MATERIAL,
  PET_MATERIAL,
  VEHICLE_MATERIAL,
} from '../../../../../../../constants/constants';
import { isEmpty } from '../../../../../../../util/commons';
import EstateCard from './EstateCard/EstateCard';
import PersonCard from './PersonCard/PersonCard';
import PetCard from './PetCard/PetCard';
import ShowMoreMaterials from './ShowMoreMaterials/ShowMoreMaterials';
import { useStyles } from './styles';
import VehicleCard from './VehicleCard/VehicleCard';

type Props = {
  materials: any;
  materialType: string;
  materialSelected: any;
  setMaterialSelected: any;
};

const Materials: FC<Props> = ({
  materials,
  materialType,
  materialSelected,
  setMaterialSelected,
}) => {
  const classes = useStyles();
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    const init = async () => {
      setShowMore(false);
    };
    init();
  }, [materialType]);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  const getMaterials = (materials: any) => {
    const materialsDisabled = materials
      ? materials.filter((currentMaterial: any) => !currentMaterial.active)
      : [];
    const materialsActive = materials
      ? materials.filter((currentMaterial: any) => currentMaterial.active)
      : [];
    const currentMaterials = [...materialsActive, ...materialsDisabled];

    if (showMore) {
      return currentMaterials;
    } else {
      return currentMaterials?.slice(0, MAX_NUMBER_MATERIALS_DEFAULT);
    }
  };

  const getCurrentSelect = (type: string) => {
    const materialObject: { [key: string]: boolean } = {
      PET_MATERIAL:
        materials?.materialPet?.length === 1 && Object.keys(materialSelected).length === 0,
      ESTATE_MATERIAL:
        materials?.materialHome?.length === 1 && Object.keys(materialSelected).length === 0,
      VEHICLE_MATERIAL:
        materials?.materialVehicle?.length === 1 && Object.keys(materialSelected).length === 0,
      PERSON_MATERIAL:
        materials?.materialPet?.length === 0 &&
        materials?.materialHome?.length === 0 &&
        materials?.materialVehicle?.length === 0 &&
        Object.keys(materialSelected).length === 0,
    };

    return materialObject[type];
  };

  const getMaterialComponentByType = () => {
    switch (materialType) {
      case PET_MATERIAL:
        return getMaterials(materials?.materialPet)?.map((currentMaterial: any, index: any) => {
          return (
            <>
              <div key={`pet-${index}`}>
                <PetCard
                  cardInfo={currentMaterial}
                  selected={getCurrentSelect(PET_MATERIAL)}
                  materialSelected={materialSelected}
                  setMaterialSelected={setMaterialSelected}
                />
              </div>
            </>
          );
        });
      case ESTATE_MATERIAL:
        return getMaterials(materials?.materialHome)?.map((currentMaterial: any, index: any) => {
          return (
            <>
              <div key={`estate-${index}`}>
                <EstateCard
                  cardInfo={currentMaterial}
                  selected={getCurrentSelect(ESTATE_MATERIAL)}
                  materialSelected={materialSelected}
                  setMaterialSelected={setMaterialSelected}
                />
              </div>
            </>
          );
        });
      case VEHICLE_MATERIAL:
        return getMaterials(materials?.materialVehicle)?.map((currentMaterial: any, index: any) => {
          return (
            <>
              <div key={`vehicle-${index}`}>
                <VehicleCard
                  cardInfo={currentMaterial}
                  selected={getCurrentSelect(VEHICLE_MATERIAL)}
                  materialSelected={materialSelected}
                  setMaterialSelected={setMaterialSelected}
                />
              </div>
            </>
          );
        });
      case PERSON_MATERIAL:
        return (
          <div>
            <PersonCard
              cardInfo={materials.materialPerson}
              selected={getCurrentSelect(PERSON_MATERIAL)}
              materialSelected={materialSelected}
              setMaterialSelected={setMaterialSelected}
            />
          </div>
        );
      default:
        return '';
    }
  };

  const getMaterialByType = () => {
    switch (materialType) {
      case PET_MATERIAL:
        return materials?.materialPet;
      case ESTATE_MATERIAL:
        return materials?.materialHome;
      case VEHICLE_MATERIAL:
        return materials?.materialVehicle;
      case PERSON_MATERIAL:
        return [materials?.materialPerson];
    }
  };

  const getTitleByMaterialType = () => {
    let materialTitle = '';

    switch (materialType) {
      case PET_MATERIAL:
        materialTitle = 'una mascota';
        break;
      case ESTATE_MATERIAL:
        materialTitle = 'un inmueble';
        break;
      case VEHICLE_MATERIAL:
        materialTitle = 'un vehículo';
        break;
      case PERSON_MATERIAL:
        materialTitle = 'una persona';
        break;
    }

    if (isEmpty(materialTitle)) {
      return '';
    } else {
      return (
        <Typography className={classes.subTitle} color="textPrimary" variant={'body1'}>
          {`Selecciona ${materialTitle} para continuar:`}
        </Typography>
      );
    }
  };

  return (
    <>
      <div>{getTitleByMaterialType()}</div>
      <div className={classes.materialsContainer}>{getMaterialComponentByType()}</div>
      {getMaterialByType()?.length > MAX_NUMBER_MATERIALS_DEFAULT && (
        <ShowMoreMaterials showMore={showMore} handleShowMore={handleShowMore} />
      )}
    </>
  );
};

export default Materials;

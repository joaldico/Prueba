import AccessibilityIcon from '@mui/icons-material/Accessibility';
import DriveEtaIcon from '@mui/icons-material/DriveEta';
import HouseIcon from '@mui/icons-material/House';
import PetsIcon from '@mui/icons-material/Pets';
import { Box, Card, CardContent, Grid, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import {
  ESTATE_MATERIAL,
  PERSON_MATERIAL,
  PET_MATERIAL,
  VEHICLE_MATERIAL,
} from '../../../../../../constants/constants';
import Materials from './Materials/Materials';
import { useStyles } from './styles';

interface RequestViewProps {
  materials: any;
  materialSelected: any;
  setMaterialSelected: any;
  selectedCard: any;
  setSelectedCard: any;
}

interface MaterialCardProps {
  cardType: string;
  icon: any;
  title: string;
}

const CardsTypeMaterial: React.FC<RequestViewProps> = ({
  materials,
  materialSelected,
  setMaterialSelected,
  selectedCard,
  setSelectedCard,
}) => {
  const { t } = useTranslation();
  const classes = useStyles();

  const handleCardClick = (type: string) => {
    setSelectedCard(type);
  };

  const getCardBackgroundColor = (cardType: string) => {
    return selectedCard === cardType ? classes.isSelected : classes.notSelected;
  };

  const getIconColor = (cardType: string) => {
    return selectedCard === cardType ? classes.iconColor : classes.icon;
  };

  const getTitleColor = (cardType: string) => {
    return selectedCard === cardType ? classes.titleColor : classes.title;
  };

  const cardSx = {
    borderRadius: '15px',
    cursor: 'pointer',
  };

  useEffect(() => {
    if (
      materials?.materialPet?.length === 1 &&
      materials?.materialHome?.length === 0 &&
      materials?.materialVehicle?.length === 0
    ) {
      setSelectedCard(PET_MATERIAL);
      setMaterialSelected(materials.materialPet[0]);
    } else if (
      materials?.materialPet?.length === 0 &&
      materials?.materialHome?.length === 1 &&
      materials?.materialVehicle?.length === 0
    ) {
      setSelectedCard(ESTATE_MATERIAL);
      setMaterialSelected(materials.materialHome[0]);
    } else if (
      materials?.materialPet?.length === 0 &&
      materials?.materialHome?.length === 0 &&
      materials?.materialVehicle?.length === 1
    ) {
      setSelectedCard(VEHICLE_MATERIAL);
      setMaterialSelected(materials.materialVehicle[0]);
    } else if (
      materials?.materialPet?.length === 0 &&
      materials?.materialHome?.length === 0 &&
      materials?.materialVehicle?.length === 0
    ) {
      setSelectedCard(PERSON_MATERIAL);
      setMaterialSelected(materials.materialPerson);
    }
  }, [materials]);

  const MaterialCard = ({ cardType, icon, title }: MaterialCardProps) => {
    return (
      <Card
        sx={{
          ...cardSx,
        }}
        className={getCardBackgroundColor(cardType)}
        onClick={() => handleCardClick(cardType)}
      >
        <CardContent>
          <Grid container alignItems="center" spacing={1}>
            <Grid item xs={8}>
              <Typography variant="subtitle1" className={getTitleColor(cardType)}>
                {title}
              </Typography>
            </Grid>
            <Grid item xs={4} container justifyContent="flex-end">
              {icon}
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    );
  };

  return (
    <>
      <Box>
        <Grid container spacing={3}>
          {materials?.materialVehicle?.length > 0 && (
            <Grid item xs={6} md={3}>
              <MaterialCard
                cardType={VEHICLE_MATERIAL}
                icon={<DriveEtaIcon className={getIconColor(VEHICLE_MATERIAL)} />}
                title={t('Vehículo')}
              />
            </Grid>
          )}
          {materials?.materialHome?.length > 0 && (
            <Grid item xs={6} md={3}>
              <MaterialCard
                cardType={ESTATE_MATERIAL}
                icon={<HouseIcon className={getIconColor(ESTATE_MATERIAL)} />}
                title={t('Inmueble')}
              />
            </Grid>
          )}
          {materials?.materialPet?.length > 0 && (
            <Grid item xs={6} md={3}>
              <MaterialCard
                cardType={PET_MATERIAL}
                icon={<PetsIcon className={getIconColor(PET_MATERIAL)} />}
                title={t('Mascota')}
              />
            </Grid>
          )}
          {materials?.materialPerson?.id && (
            <Grid item xs={6} md={3}>
              <MaterialCard
                cardType={PERSON_MATERIAL}
                icon={<AccessibilityIcon className={getIconColor(PERSON_MATERIAL)} />}
                title={t('Persona')}
              />
            </Grid>
          )}
        </Grid>
      </Box>
      <Materials
        materials={materials}
        materialType={selectedCard}
        materialSelected={materialSelected}
        setMaterialSelected={setMaterialSelected}
      />
    </>
  );
};

export default CardsTypeMaterial;

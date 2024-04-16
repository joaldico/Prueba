import { Box, CircularProgress, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { setSelectedCard } from './../../../../../redux/actions/requestActions';
import { getRequestSelector } from './../../../../../redux/selectors';
import CardsPlan from './CardsPlan/CardsPlan';
import CardsTypeMaterial from './CardsTypeMaterial/CardsTypeMaterial';
import RequestService from './RequestService/RequestService';
import { useStyles } from './styles';

interface RequestViewProps {
  handleNext: any;
  materials: any;
  loading: boolean;
  materialSelected: any;
  setMaterialSelected: any;
  planSelected: any;
  setPlanSelected: any;
  serviceId: string;
}

const RequestView: React.FC<RequestViewProps> = ({
  handleNext,
  materials,
  loading,
  materialSelected,
  setMaterialSelected,
  planSelected,
  setPlanSelected,
  serviceId,
}) => {
  const { t } = useTranslation();
  const classes = useStyles();
  const { selectedCard } = useSelector(getRequestSelector);
  const [copySelectedCard, setCopySelectedCard] = useState(selectedCard);
  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedCard !== copySelectedCard) {
      setMaterialSelected({});
      setPlanSelected({});
      setCopySelectedCard(selectedCard);
    }
  }, [selectedCard]);

  const onCancel = () => {
    dispatch(setSelectedCard({ selectedCard: '' }));
    setMaterialSelected({});
    setPlanSelected({});
  };

  const setSelectedCardInternal = (card: any) => {
    dispatch(setSelectedCard({ selectedCard: card }));
  };

  return (
    <>
      {loading && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '20vh',
          }}
        >
          <CircularProgress />
        </div>
      )}
      {materials?.materialVehicle?.length <= 0 &&
      materials?.materialHome?.length <= 0 &&
      materials?.materialPet?.length <= 0 &&
      Object.keys(materials?.materialPerson).length <= 0 ? (
        <>
          <RequestService />
        </>
      ) : (
        <>
          {!loading && (
            <>
              <Typography className={classes.subTitle} color="textPrimary" variant={'body1'}>
                {t('Selecciona una opción para continuar:')}
              </Typography>
              <CardsTypeMaterial
                materials={materials}
                materialSelected={materialSelected}
                setMaterialSelected={setMaterialSelected}
                selectedCard={selectedCard}
                setSelectedCard={setSelectedCardInternal}
              />
              {Object.keys(materialSelected).length !== 0 && (
                <CardsPlan
                  materialSelected={materialSelected}
                  planSelected={planSelected}
                  setPlanSelected={setPlanSelected}
                  serviceId={serviceId}
                  selectedCard={selectedCard}
                />
              )}
              {Object.keys(planSelected).length !== 0 && (
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    gap: '41px',
                    marginTop: '12px',
                  }}
                >
                  <Button
                    onClick={onCancel}
                    style={{ textTransform: 'none' }}
                    classes={{ root: classes.buttonCancel }}
                  >
                    Cancelar
                  </Button>
                  <Button
                    onClick={handleNext}
                    style={{ textTransform: 'none' }}
                    classes={{ root: classes.buttonSubmit }}
                  >
                    Continuar
                  </Button>
                </Box>
              )}
            </>
          )}
        </>
      )}
    </>
  );
};

export default RequestView;

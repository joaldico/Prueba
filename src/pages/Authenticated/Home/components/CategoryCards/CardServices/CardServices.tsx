import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Card, CardContent, Typography } from '@mui/material';
import React, { useState } from 'react';

import { MAX_NUMBER_SERVICES_DEFAULT } from '../../../../../../constants/constants';
import CardService from './CardService/CardService';
import { useStyles } from './styles';

interface CategoriesProps {
  category: any;
}

const CardServices: React.FC<CategoriesProps> = ({ category }) => {
  const classes = useStyles();
  const [showMore, setShowMore] = useState(false);
  const allServices = category?.services;

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  const getServices = () => {
    if (showMore) {
      return allServices;
    } else {
      return allServices.slice(0, MAX_NUMBER_SERVICES_DEFAULT);
    }
  };

  return (
    <Card className={classes.card}>
      <CardContent className={classes.cardContent}>
        <div className={classes.content}>
          <Typography variant="body1" color="textPrimary" className={classes.categoryName}>
            {`Selecciona uno de los servicios de ${category.name}:`}
          </Typography>
          <div className={classes.containerServices}>
            {getServices().map((service: any, index: any) => (
              <CardService key={index} service={service} category={category} />
            ))}
          </div>
          {allServices.length > MAX_NUMBER_SERVICES_DEFAULT && (
            <div className={classes.arrow}>
              {showMore ? (
                <KeyboardArrowUpIcon className={classes.icon} onClick={handleShowMore} />
              ) : (
                <KeyboardArrowDownIcon className={classes.icon} onClick={handleShowMore} />
              )}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default CardServices;

import { Card } from '@mui/material';
import classNames from 'classnames';
import React from 'react';

import { useStyles } from './styles';

interface CardSummaryProps {
  children: any;
  title: any;
}

const CardSumary: React.FC<CardSummaryProps> = ({ children, title }) => {
  const classes = useStyles();

  return (
    <Card
      classes={{
        root: classNames(classes.card),
      }}
    >
      <div className={classes.title}>{title}</div>
      {children}
    </Card>
  );
};

export default CardSumary;

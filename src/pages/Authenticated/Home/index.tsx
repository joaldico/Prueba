import { Grid } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

import BusinessUnitParamsContext from '../../../contexts/BusinessUnitParamsContext/businessUnitParamsContext';
import { clearRequest } from '../../../redux/actions/requestActions';
import CategoryCards from './components/CategoryCards';
import { useStyles } from './styles';
import WelcomeSection from './WelcomeSection';

const Home = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const { portalConfigParams } = useContext(BusinessUnitParamsContext);
  const { categories } = portalConfigParams!;
  const [term, setTerm] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearRequest());
  }, []);

  return (
    <>
      <WelcomeSection setTerm={setTerm} />
      <div className={classes.container}>
        <Grid container className={classes.cardsContainer}>
          <CategoryCards categories={categories} term={term} />
        </Grid>
      </div>
    </>
  );
};

export default Home;

import { Typography } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { getTermsConditions } from '../../../api/api';
import ContainerAuthPage from '../../../components/Containers/ContainerAuthPage/ContainerAuthPage';
import CustomBreadcumbs from '../../../components/CustomBreadcumbs';
import { TERMS_AND_CONDITIONS } from '../../../constants/routes';
import { TERMS_AND_CONDITIONS_VIEW_NAME } from '../../../constants/views';
import BusinessUnitParamsContext from '../../../contexts/BusinessUnitParamsContext/businessUnitParamsContext';
import { setCurrentViewLink, setCurrentViewName } from '../../../redux/actions/appActions';

const TermsAndConditions = () => {
  const [html, setHtml] = useState('');
  const { contextUrlHome } = useContext(BusinessUnitParamsContext);
  const url: string = contextUrlHome!;
  const dispatch = useDispatch();

  useEffect(() => {
    const init = async () => {
      try {
        const response = await getTermsConditions(url);

        setHtml(response?.termsConditions?.description);
      } catch (error) {
        console.error(error);
      }
    };
    init();
  }, []);

  useEffect(() => {
    dispatch(setCurrentViewName({ currentViewName: TERMS_AND_CONDITIONS_VIEW_NAME }));
    dispatch(setCurrentViewLink({ currentViewLink: TERMS_AND_CONDITIONS }));
  }, []);

  return (
    <ContainerAuthPage>
      <CustomBreadcumbs />
      <Typography
        dangerouslySetInnerHTML={{
          __html: html,
        }}
      />
    </ContainerAuthPage>
  );
};

export default TermsAndConditions;

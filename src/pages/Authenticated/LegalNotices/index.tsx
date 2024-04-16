import { Typography } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { getLegalNotices } from '../../../api/api';
import ContainerAuthPage from '../../../components/Containers/ContainerAuthPage/ContainerAuthPage';
import CustomBreadcumbs from '../../../components/CustomBreadcumbs';
import { LEGAL_NOTICES } from '../../../constants/routes';
import { LEGAL_NOTICES_VIEW_NAME } from '../../../constants/views';
import BusinessUnitParamsContext from '../../../contexts/BusinessUnitParamsContext/businessUnitParamsContext';
import { setCurrentViewLink, setCurrentViewName } from '../../../redux/actions/appActions';

const LegalNotices = () => {
  const [html, setHtml] = useState('');
  const { contextUrlHome } = useContext(BusinessUnitParamsContext);
  const url: string = contextUrlHome!;
  const dispatch = useDispatch();

  useEffect(() => {
    const init = async () => {
      try {
        const response = await getLegalNotices(url);
        setHtml(response?.legalNotices?.description);
      } catch (error) {
        console.error(error);
      }
    };
    init();
  }, []);

  useEffect(() => {
    dispatch(setCurrentViewName({ currentViewName: LEGAL_NOTICES_VIEW_NAME }));
    dispatch(setCurrentViewLink({ currentViewLink: LEGAL_NOTICES }));
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

export default LegalNotices;

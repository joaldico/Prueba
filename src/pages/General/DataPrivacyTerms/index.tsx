import { Typography } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { getTermsDataPrivacy } from '../../../api/api';
import ContainerAuthPage from '../../../components/Containers/ContainerAuthPage/ContainerAuthPage';
import CustomBreadcumbs from '../../../components/CustomBreadcumbs';
import ContainerPageContact from '../../../components/LayoutAuth/ContainerPageContact/index';
import { DATA_PRIVACY_TERMS } from '../../../constants/routes';
import { DATA_PRIVACY_TERMS_VIEW_NAME } from '../../../constants/views';
import BusinessUnitParamsContext from '../../../contexts/BusinessUnitParamsContext/businessUnitParamsContext';
import { setCurrentViewLink, setCurrentViewName } from '../../../redux/actions/appActions';
import { isAuthenticate } from '../../../util/commons';

const DataPrivacyTerms = () => {
  const [html, setHtml] = useState('');
  const { contextUrlHome, businessUnitUUID } = useContext(BusinessUnitParamsContext);
  const url: string = contextUrlHome!;
  const dispatch = useDispatch();

  useEffect(() => {
    const init = async () => {
      try {
        const response = await getTermsDataPrivacy(url);
        setHtml(response?.termsDataPrivacy?.description);
      } catch (error) {
        console.error(error);
      }
    };
    init();
  }, []);

  useEffect(() => {
    dispatch(setCurrentViewName({ currentViewName: DATA_PRIVACY_TERMS_VIEW_NAME }));
    dispatch(setCurrentViewLink({ currentViewLink: DATA_PRIVACY_TERMS }));
  }, []);

  const getContainerPage = (children: any) => {
    if (!isAuthenticate(businessUnitUUID)) {
      return <ContainerPageContact>{children}</ContainerPageContact>;
    } else return children;
  };

  return (
    <>
      {getContainerPage(
        <ContainerAuthPage>
          <CustomBreadcumbs />
          <Typography
            dangerouslySetInnerHTML={{
              __html: html,
            }}
          />
        </ContainerAuthPage>
      )}
    </>
  );
};

export default DataPrivacyTerms;

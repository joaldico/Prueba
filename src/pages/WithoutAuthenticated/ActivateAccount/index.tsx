import queryString from 'query-string';
import { useContext, useEffect, useState } from 'react';

import { verifyWhenCreateActivateToken } from '../../../api/api';
import Spinner from '../../../components/Spinner';
import BusinessUnitParamsContext from '../../../contexts/BusinessUnitParamsContext/businessUnitParamsContext';
import CreateAccount from './CreateAccount';
import TokenNotValid from './TokenNotValid';

const ActivateAccount = () => {
  const { token } = queryString.parse(location.search);
  const { businessUnitUUID } = useContext(BusinessUnitParamsContext);
  const [isActivateAccount, setIsActivateAccount] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [emailToCreate, setEmailToCreate] = useState('');

  useEffect(() => {
    const init = async () => {
      try {
        const response = await verifyWhenCreateActivateToken(token, businessUnitUUID);
        setEmailToCreate(response.email);
        setIsLoading(false);
        setIsActivateAccount(true);
      } catch (error) {
        setIsLoading(false);
        console.error(error);
      }
    };
    init();
  }, []);

  if (isLoading) return <Spinner />;
  else {
    if (isActivateAccount && token != null) {
      return <CreateAccount emailToCreate={emailToCreate} tokenToCreateAccount={token} />;
    } else {
      return <TokenNotValid />;
    }
  }
};

export default ActivateAccount;

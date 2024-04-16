import React, { createContext } from 'react';

import ChucknorrisRandomPage from '../../components/ChucknorrisRandomPage';
import { BusinessUnitParams } from '../../models/BusinessUnitParamsModel';

type ContextType = Partial<BusinessUnitParams>;
const BusinessUnitParamsContext = createContext<ContextType>({});
export default BusinessUnitParamsContext;

export const BusinessUnitParamsProvider: React.FC = () => {
  return <ChucknorrisRandomPage />;
}

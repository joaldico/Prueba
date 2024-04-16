import { PaymentList } from '../PaymentList';
import { ServiceData } from '../ServiceData';

export type UserData = {
  name: string;
  lastName: string;
  typeDocument: string;
  rut: string;
  address: string;
  phone: string;
  email: string;
  servicesDetail: ServiceData;
  paymentMethod: PaymentList;
  unitName?: string;
  unitLogo?: string;
  personalDocumentType?: string;
  personFullName?: string;
  personAdress?: string;
  personPhone?: string;
  personEmail?: string;
  data?: any;
};

export function initialUserData() {
  return {
    name: '',
    lastName: 'string',
    typeDocument: '',
    rut: '',
    address: '',
    phone: '',
    email: '',
    servicesDetail: {},
    paymentMethod: [],
  };
}

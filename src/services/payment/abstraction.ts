import { GenericError, GenericService } from '../types';

export type InputWebPayValidateAndGet = { hash: string };

export type ServiceData = {
  service?: string;
  serviceDate?: string;
  schedule?: string;
  totalPayment?: string;
  productType?: string;
  productDateService?: string;
  totalAmountToPay?: string;
};

const res = {
  orderId: 700,
  paymentType: 'WEB_PAY',
  requestMethod: null,
  paymentUrl: null,
  headers: null,
  payload: null,
  data: '{"unitName":"BackOffice","unitLogo":"logo.png","personDocumentType":"RUT","personFullName":"Misael Polidor","personAdress":"Caracas","personPhone":"4149036569","personEmail":"misael@test.com","productType":"Servicio","productDateService":"2022-01-05 09:40","totalAmountToPay":20.0}',
  hash: 'f3cf60b77fd9844f855af4870f2b4c6b275b653f4fead819da93838b2238bca040e914b261bfcd705b208c53161b6d02',
  token:
    'eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI1MDI0IiwiaWF0IjoxNjQzMDI4OTgxLCJUWVBFIjoiQSIsIkVNQUlMIjoiY2xpZW50ZWFjY2hAeW9wbWFpbC5jb20iLCJVU0VSTkFNRSI6ImNsaWVudGVhY2NoIiwiUk9MRV9JRCI6OTAxLCJTQ09QRV9JRCI6NywiZXhwIjoxNjQzMDU3NzgxLCJCVVNJTkVTU19VTklUX1VVSUQiOiI0NTY4ODgyYy03ODNkLTExZWItOTQzOS0wMjQyYWMxMzAwMDIiLCJURU5BTlRfVVVJRCI6ImFmZTdhZmM4LTY2NzktMTFlYi1hZTkzLTAyNDJhYzEzMDAwMiIsIkNVU1RPTUVSX0lEIjo5MX0.aNjnIALZoY2yIMt3sFHe52e6tQU43BJ3kNa7E-rXMMc',
};
export type OutputWebPayValidateAndGet =
  | {
      name?: string;
      orderId: number;
      paymentType: string;
      requestMethod: string | null;
      paymentUrl: null;
      headers: string | null;
      payload: string | null;
      token: string;
      hash: string;
      request: RequestWebpay;
      data: DataWebpay;
    }
  | GenericError;

export type OutputGetPayerData =
  | {
      firstName: string;
      lastName: string;
      identificationType: string;
      mobilePhone: string;
      identificationNumber: string;
      email: string;
    }
  | GenericError;

export type InputCreateTx = {
  hash: string;
};

export type OutputCreateTx =
  | {
      name?: string;
      token: string;
      url: string;
    }
  | GenericError;

export type InputSearchTransactionByToken = {
  tokenWs: string;
};
export type InputSearchTransactionByHash = {
  hash: string;
};
export type InputGetPayerData = {
  bu: string | undefined;
  tenant: string | undefined;
  clientId: number | undefined;
};
export type RequestWebpay = {
  buyOrder: string;
  sessionId: string;
  amount: number;
};

export class DataWebpay {
  unitName: string;
  unitLogo: string;
  personDocumentType: string;
  personFullName: string;
  personAddress: string;
  personPhone: string;
  personEmail: string;
  productType: string;
  productDateService: string;
  totalAmountToPay: number;

  constructor({
    unitName,
    unitLogo,
    personDocumentType,
    personFullName,
    personAddress,
    personPhone,
    personEmail,
    productType,
    productDateService,
    totalAmountToPay,
  }: DataWebpay) {
    this.unitName = unitName;
    this.unitLogo = unitLogo;
    this.personDocumentType = personDocumentType;
    this.personFullName = personFullName;
    this.personAddress = personAddress;
    this.personPhone = personPhone;
    this.personEmail = personEmail;
    this.productType = productType;
    this.productDateService = productDateService;
    this.totalAmountToPay = totalAmountToPay;
  }
}

export class SuccessSearchTransaction {
  businessUnitId: string;
  id: string;
  isOrderPaid: boolean;
  isOrderVoided: boolean;
  isOrderPending: boolean;
  payerData: string;
  paymentProcessorIdentifier: string;
  paymentProcessorStatus: string;
  paymentProcessorTxRequest: any;
  paymentProcessorTxResponse: string;
  serviceData: string;
  tennantId: string;
  tutenAuthToken: string;
  tutenCaseId: number;
  tutenClientUrl: string;
  tutenData: any;
  tutenHash: string;
  tutenOrderId: number;
  tutenOrderPayload: any;
  tutenPaymentType: string;
  tutenTxReason: string;
  txDate: number;
  txExpirationDate: number;

  constructor({
    id,
    isOrderPaid,
    payerData,
    isOrderVoided,
    isOrderPending,
    txExpirationDate,
    txDate,
    businessUnitId,
    tutenHash,
    tutenOrderId,
    tennantId,
    tutenCaseId,
    tutenData,
    tutenPaymentType,
    tutenAuthToken,
    tutenClientUrl,
    paymentProcessorStatus,
    paymentProcessorIdentifier,
    paymentProcessorTxRequest,
    paymentProcessorTxResponse,
    tutenTxReason,
    serviceData,
    tutenOrderPayload,
  }: SuccessSearchTransaction) {
    this.id = id;
    this.isOrderPaid = isOrderPaid;
    this.isOrderVoided = isOrderVoided;
    this.isOrderPending = isOrderPending;
    this.txExpirationDate = txExpirationDate;
    this.txDate = txDate;
    this.tutenPaymentType = tutenPaymentType;
    this.payerData = payerData;
    this.tennantId = tennantId;
    this.serviceData = serviceData;
    this.tutenTxReason = tutenTxReason;
    this.businessUnitId = businessUnitId;
    this.tutenHash = tutenHash;
    this.tutenOrderId = tutenOrderId;
    this.tutenCaseId = tutenCaseId;
    this.tutenData = tutenData;
    this.tutenAuthToken = tutenAuthToken;
    this.tutenClientUrl = tutenClientUrl;
    this.paymentProcessorStatus = paymentProcessorStatus;
    this.paymentProcessorIdentifier = paymentProcessorIdentifier;
    this.paymentProcessorTxRequest = paymentProcessorTxRequest;
    this.paymentProcessorTxResponse = paymentProcessorTxResponse;
    this.serviceData = serviceData;
    this.tutenOrderPayload = tutenOrderPayload;
  }
}

export class SuccessSearchTransactionByToken extends SuccessSearchTransaction {
  constructor(init: SuccessSearchTransactionByToken) {
    super(init);
  }
}
export class SuccessSearchTransactionByHash extends SuccessSearchTransaction {
  constructor(init: SuccessSearchTransactionByToken) {
    super(init);
  }
}
export type OutputSearchTransactionByHash =
  | SuccessSearchTransactionByHash
  | GenericError
  | undefined;
export type OutputSearchTransactionByToken =
  | SuccessSearchTransactionByToken
  | GenericError
  | undefined;

export interface IPaymentService {
  webPayValidateAndGet: GenericService<
    InputWebPayValidateAndGet,
    OutputWebPayValidateAndGet | GenericError
  >;
  searchTransactionByToken: GenericService<
    InputSearchTransactionByToken,
    OutputSearchTransactionByToken
  >;
  searchTransactionByHash: GenericService<
    InputSearchTransactionByHash,
    OutputSearchTransactionByHash
  >;
  getPayerData: GenericService<InputGetPayerData, OutputGetPayerData>;
}

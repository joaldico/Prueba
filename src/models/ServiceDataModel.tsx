export type ServiceData = {
  nameService: string;
  state: string;
  stateId: number;
  creationDate: string;
  desiredDate: string;
  startTime: string;
  endTime: string;
  businessUnit: string;
  idProvider: number | null;
  idProfessional: number;
  nameAddressOrigin: string;
  latitudeOrigin: number;
  longitudeOrigin: number;
  nameAddressDestination: string | null;
  latitudeDestination: string | null;
  longitudeDestination: string | null;
  cancellationDate: string | null;
  linkSurvey: string | null;
  stateSurvey: string | null;
  bookingId: number | null;
  actualStartDate: string | null;
  endDate: string | null;
  actualEndDate: string | null;
  executionStartDate: string | null;
  technicalDateOnTheWay: string | null;
};
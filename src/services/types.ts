export type GenericService<Input, Output> = (input: Input, output: Output) => Promise<Output>;
enum EnumError {
  'BAD_REQUEST',
}

enum EnumErrorCode {
  'TRANSACTION_NOT_EXIST',
  'INTERNAL_SERVER_ERROR',
}
type Errors = {
  methodName: string;
  fileName: string;
  lineNumber: number;
  className: string;
  nativeMethod: boolean;
};
export class GenericError {
  timestamp: number;
  message: string;
  status: number;
  error: keyof typeof EnumError;
  errorCode: keyof typeof EnumErrorCode;
  path: string;
  errors: Errors[];

  constructor({ timestamp, message, status, error, errorCode, path, errors }: GenericError) {
    this.timestamp = timestamp;
    this.message = message;
    this.status = status;
    this.errors = errors;
    this.error = error;
    this.errorCode = errorCode;
    this.path = path;
  }
}

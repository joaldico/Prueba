import * as EmailValidator from 'email-validator';

export function validateEmail(email: string) {
  return EmailValidator.validate(email);
}

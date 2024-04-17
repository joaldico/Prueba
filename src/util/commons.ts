import dayjs from 'dayjs';
import * as EmailValidator from 'email-validator';

import { REGEX_PASSWORD } from '../constants/constants';

export function validateEmail(email: string) {
  return EmailValidator.validate(email);
}

export const convertDate = (date: string | Date | number, format = 'DD/MM/YYYY'): string => {
  return dayjs(date).format(format);
};

export const getArrayMobile = (numberToSlice: number, array: Array<object>) => {
  const arrayMobile: any[] = [];

  for (let i = 0; i < numberToSlice; i++) {
    const arrayPart = array.slice(i * 3, 3 * (i + 1));
    arrayMobile.push(arrayPart);
  }

  return arrayMobile;
};

export const SortArray = (x: any, y: any) => {
  if (x.name.toLowerCase() < y.name.toLowerCase()) {
    return -1;
  }
  if (x.name.toLowerCase() > y.name.toLowerCase()) {
    return 1;
  }
  return 0;
};

export const scrollTo = () => {
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
};

export const obfuscateEmail = (email: string) => {
  return email.replace(
    /[a-z0-9\-_.]+@/gi,
    (c: any) =>
      c.substr(0, 2) +
      c
        .split('')
        .slice(3, -1)
        .map((v: any) => '*')
        .join('') +
      c.substr(-2, 1) +
      '@'
  );
};

export const isValidPassword = (password: string) => {
  return RegExp(REGEX_PASSWORD).test(password) && !password.includes(' ');
};

export const isEmpty = (value: string | number | undefined) => {
  return value === null || value === undefined || value === '';
};

export const handleContactPhoneNumber = (contactPhone: any) => {
  let phoneNumber = contactPhone?.replace('+', '');
  phoneNumber =
    '(+' +
    phoneNumber?.slice(0, 2) +
    ') ' +
    phoneNumber?.slice(2, 3) +
    ' ' +
    phoneNumber?.slice(3, 7) +
    ' ' +
    phoneNumber?.slice(7);
  return phoneNumber;
};

export const clearSession = () => {
  localStorage.clear();
  setTimeout(() => {
    location.reload();
  }, 1000);
};

export const handleError = (message: any) => {
  if (message === 'TOKEN_NOT_VALID') {
    clearSession();
  }
};

export const hexToRGBA = (hex: any, opacity: any) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};

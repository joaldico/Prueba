import dayjs from 'dayjs';

export const convertDate = (date: string | Date | number, format = 'DD/MM/YYYY'): string => {
  return dayjs(date).format(format);
};

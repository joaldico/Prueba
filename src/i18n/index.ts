import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

type Props = {
  path: string;
};

export const getDefaultI18nextInstance = (resources: Props) => {
  i18n
    .use(initReactI18next)
    .use(Backend)
    .init({
      // lng: 'en',
      // fallbackLng: 'en',
      keySeparator: false,
      react: {
        useSuspense: false,
      },
      backend: {
        loadPath: resources.path,
      },
    });
  return i18n;
};

export default i18n;

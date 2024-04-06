import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en_locale from './_locales/en'
import vi_locale from './_locales/vi'

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: en_locale
      },
      vi: {
        translation: vi_locale
      }
    },
    lng: "vi", // if you're using a language detector, do not define the lng option
    fallbackLng: "vi",

    interpolation: {
      escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    }
  });

export default i18n;
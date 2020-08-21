import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import LanguageDetector from 'i18next-browser-languagedetector'

import translationEN from './assets/locales/en.json'
import translationFI from './assets/locales/fi.json'

const resources = {
  en: {
    translation: translationEN
  },
  fi: {
    translation: translationFI
  }
}

i18n.use(LanguageDetector).use(initReactI18next).init({
  resources,
  fallbackLng: 'en',
  debug: true,

  interpolation: {
    escapeValue: false // not needed for react as it escapes by default
  }
})

export default i18n

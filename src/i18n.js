import i18n from 'i18next'
import detector from 'i18next-browser-languagedetector'
import { reactI18nextModule } from 'react-i18next'

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

i18n.use(detector).use(reactI18nextModule).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',

  interpolation: {
    escapeValue: false
  }
})

export default i18n

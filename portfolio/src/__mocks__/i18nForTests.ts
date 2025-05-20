import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  lng: "ca",
  fallbackLng: "ca",
  resources: {
    ca: { translation: { "download-cv": "Descarregar CV" } },
    es: { translation: { "download-cv": "Descargar CV" } },
    en: { translation: { "download-cv": "Download CV" } },
  },
  interpolation: { escapeValue: false },
});

export default i18n;

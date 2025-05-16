import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import { translationEnglish } from "../src/locales/en/translation.ts";
import { translationFrench } from "../src/locales/fr/translation.ts";

i18n.use(initReactI18next).init({
	resources: {
		en: { translation: translationEnglish },
		fr: { translation: translationFrench },
	},
	fallbackLng: "en",
	interpolation: {
		escapeValue: false,
	},
});

export default i18n;

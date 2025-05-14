import { createContext, useState, useContext } from "react";

export const Languages = {
	Fr: "français",
	En: "anglais",
};

export const LanguageContext = createContext(null);

export const useLanguage = () => useContext(LanguageContext);

export function LanguageProvider({ children }) {
	const [language, setLanguage] = useState(Languages.Fr);

	return (
		<LanguageContext.Provider value={{ language, setLanguage }}>
			{children}
		</LanguageContext.Provider>
	);
}

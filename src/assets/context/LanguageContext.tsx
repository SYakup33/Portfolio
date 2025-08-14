import { createContext, useState, useContext } from "react";
import type { ReactNode, Dispatch, SetStateAction } from "react";

interface LanguageContextType {
	language: string;
	setLanguage: Dispatch<SetStateAction<string>>;
}

interface LanguageProviderProps {
	children: ReactNode;
}

export const Languages = {
	Fr: "français",
	En: "anglais",
};

export const LanguageContext = createContext<LanguageContextType | null>(null);

export const useLanguage = () => useContext(LanguageContext);

export function LanguageProvider({ children }: LanguageProviderProps) {
	const [language, setLanguage] = useState(Languages.Fr);

	return (
		<LanguageContext.Provider value={{ language, setLanguage }}>
			{children}
		</LanguageContext.Provider>
	);
}

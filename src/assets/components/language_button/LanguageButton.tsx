import { useLanguage } from "../../context/LanguageContext";

function LanguageButton() {
	const { setLanguage } = useLanguage();

	return (
		<>
			<button type="button" onClick={() => setLanguage("fr")}>
				FR
			</button>
			<button type="button" onClick={() => setLanguage("en")}>
				EN
			</button>
		</>
	);
}

export default LanguageButton;

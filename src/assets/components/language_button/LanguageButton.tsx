import { useLanguage } from "../../context/LanguageContext";
import "./LanguageButton.css";

function LanguageButton() {
	const { language, setLanguage } = useLanguage();

	const flags = {
		fr: "src/assets/images/language_button/france_flag.png",
		en: "src/assets/images/language_button/england_flag.png",
	};

	return (
		<div className="lang_menu">
			<div className="selected_lang">
				<img
					src={flags[language]}
					alt={`flag for  ${language}`}
					className="selected_flag"
				/>
				{language === "fr" ? "FR" : "EN"}
			</div>
			<ul>
				<li>
					{" "}
					<button type="button" onClick={() => setLanguage("fr")}>
						<img
							src="src\assets\images\language_button\france_flag.png"
							alt=""
						/>
						French
					</button>
				</li>
				<li>
					{" "}
					<button type="button" onClick={() => setLanguage("en")}>
						<img
							src="src\assets\images\language_button\england_flag.png"
							alt=""
						/>
						English
					</button>
				</li>
			</ul>
		</div>
	);
}

export default LanguageButton;

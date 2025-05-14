import { useTranslation } from "react-i18next";
import "./LanguageButton.css";
import "../../../i18n.tsx";

function LanguageButton() {
	const { t, i18n } = useTranslation();

	const changeLanguage = (lng) => {
		i18n.changeLanguage(lng);
	};
	const flags = {
		fr: "src/assets/images/language_button/france_flag.png",
		en: "src/assets/images/language_button/england_flag.png",
	};

	return (
		<div className="lang_menu">
			<div className="selected_lang">
				<img
					src={flags[i18n.language]}
					alt={`Flag for ${i18n.language}`}
					className="selected_flag"
				/>
				{i18n.language.toUpperCase()}
			</div>

			<ul>
				<li>
					<button type="button" onClick={() => changeLanguage("fr")}>
						<img
							src="src/assets/images/language_button/france_flag.png"
							alt="French Flag"
						/>
						French
					</button>
				</li>
				<li>
					<button type="button" onClick={() => changeLanguage("en")}>
						<img
							src="src/assets/images/language_button/england_flag.png"
							alt="English Flag"
						/>
						English
					</button>
				</li>
			</ul>
		</div>
	);
}

export default LanguageButton;

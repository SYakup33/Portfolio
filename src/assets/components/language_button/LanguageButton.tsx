import { useTranslation } from "react-i18next";
import "./LanguageButton.css";
import "../../../i18n.tsx";
import engFlag from "../../images/language_button/england_flag.png";
import frFlag from "../../images/language_button/france_flag.png";

function LanguageButton() {
	const { i18n } = useTranslation();

	const changeLanguage = (lng) => {
		i18n.changeLanguage(lng);
	};
	const flags = {
		fr: frFlag,
		en: engFlag,
	};

	return (
		<div className="lang_menu">
			<div className="selected_lang">
				<img
					src={flags[i18n.language]}
					alt={`Flag for ${i18n.language}`}
					className="selected_flag"
				/>
				<span className="selected_lang_text">
					{i18n.language.toUpperCase()}
				</span>
			</div>

			<ul>
				<li>
					<button type="button" onClick={() => changeLanguage("fr")}>
						<img src={frFlag} alt="French Flag" />
						French
					</button>
				</li>
				<li>
					<button type="button" onClick={() => changeLanguage("en")}>
						<img src={engFlag} alt="English Flag" />
						English
					</button>
				</li>
			</ul>
		</div>
	);
}

export default LanguageButton;

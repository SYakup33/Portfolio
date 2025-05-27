import { useTranslation } from "react-i18next";
import { useState, useRef } from "react";
import "./LanguageButton.css";
import "../../../../i18n.tsx";
import engFlag from "../../../images/language_button/england_flag.png";
import frFlag from "../../../images/language_button/france_flag.png";

function LanguageButton() {
	const { i18n } = useTranslation();
	const [open, setOpen] = useState(false);
	const ref = useRef<HTMLDivElement>(null);

	const changeLanguage = (lng: string) => {
		i18n.changeLanguage(lng);
		setOpen(false);
	};

	const flags = {
		fr: frFlag,
		en: engFlag,
	};

	return (
		<div className="lang_menu" ref={ref}>
			<div
				className="selected_lang"
				onClick={() => setOpen(!open)}
				onKeyDown={() => setOpen(!open)}
			>
				<img
					src={flags[i18n.language as "fr" | "en"]}
					alt={`Flag for ${i18n.language}`}
					className="selected_flag"
				/>
				<span className="selected_lang_text">
					{i18n.language.toUpperCase()}
				</span>
				<span className="arrow">{open ? "▲" : "▼"}</span>
			</div>

			{open && (
				<div className="lang_dropdown">
					<button type="button" onClick={() => changeLanguage("fr")}>
						<img src={frFlag} alt="French Flag" /> Français
					</button>
					<button type="button" onClick={() => changeLanguage("en")}>
						<img src={engFlag} alt="English Flag" /> English
					</button>
				</div>
			)}
		</div>
	);
}

export default LanguageButton;

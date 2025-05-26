import { useState } from "react";
import { useTranslation } from "react-i18next";
import "./LanguageButton.css";
import "../../../../i18n.tsx";
import engFlag from "../../../images/language_button/england_flag.png";
import frFlag from "../../../images/language_button/france_flag.png";
import LanguageButtonModal from "../languageButtonModal/LanguageButtonModal.tsx";

function LanguageButton() {
	const { t, i18n } = useTranslation();
	const [open, setOpen] = useState(false);

	const changeLanguage = (lng: string) => {
		i18n.changeLanguage(lng);
		setOpen(false);
	};

	const flags = {
		fr: frFlag,
		en: engFlag,
	};

	return (
		<div className="lang_menu">
			<div
				className="selected_lang"
				onClick={() => setOpen(true)}
				onKeyDown={() => setOpen(true)}
			>
				<img
					src={flags[i18n.language as "fr" | "en"]}
					alt={`Flag for ${i18n.language}`}
					className="selected_flag"
				/>
				<span className="selected_lang_text">
					{i18n.language.toUpperCase()}
				</span>
			</div>

			<LanguageButtonModal isOpen={open} onClose={() => setOpen(false)}>
				<h2>{t("navigation.modalTitle")}</h2>
				<div className="modal_lang_list">
					<button type="button" onClick={() => changeLanguage("fr")}>
						<img src={frFlag} alt="French Flag" />
						French
					</button>
					<button type="button" onClick={() => changeLanguage("en")}>
						<img src={engFlag} alt="English Flag" />
						English
					</button>
				</div>
			</LanguageButtonModal>
		</div>
	);
}

export default LanguageButton;

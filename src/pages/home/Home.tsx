import "./Home.css";
import "../../index.css";
import { useTranslation } from "react-i18next";

import { Link, useNavigate } from "react-router";
import LanguageButton from "../../assets/components/language_button/LanguageButton";
import Header from "../../assets/components/header/Header";

function Home() {
	const { t } = useTranslation();

	return (
		<>
			<Header />
			<div>
				<h1>{t("welcome")}</h1>
			</div>
		</>
	);
}

export default Home;

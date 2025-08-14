import LanguageButton from "./languageButton/LanguageButton";
import { useTranslation } from "react-i18next";
import "./Header.css";
import logo from "../../images/hud/logo.svg";
import { Link } from "react-router";

function Header() {
	const { t } = useTranslation();
	return (
		<>
			<nav>
				<img src={logo} alt={t("alt.myLogo")} />
				<ul className="nav_list">
					<Link to="/" className="link">
						<li>{t("navigation.about")}</li>
					</Link>
					<Link to="/experiences" className="link">
						<li>{t("navigation.experiences")}</li>
					</Link>
					<Link to="/projects" className="link">
						<li>{t("navigation.projects")}</li>
					</Link>
					<Link to="/skills" className="link">
						<li>{t("navigation.skills")}</li>
					</Link>

					<LanguageButton />
				</ul>
			</nav>
		</>
	);
}

export default Header;

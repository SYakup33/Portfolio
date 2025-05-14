import "./Home.css";
import "../../index.css";
import { useLanguage } from "../../assets/context/LanguageContext";

import { Link, useNavigate } from "react-router";
import LanguageButton from "../../assets/components/language_button/LanguageButton";

function Home() {
	const { language, setLanguage } = useLanguage();

	return (
		<>
			<h1>page principal</h1>
			<Link to="/"> Home </Link>
			<Link to="/experiences"> Experiences </Link>
			<Link to="/projects"> Projets </Link>
			<Link to="/skills"> Compétences </Link>
			<h1>{language === "fr" ? "Bonjour" : "Hello"}</h1>

			<LanguageButton />
		</>
	);
}

export default Home;

import "./Home.css";
import "../../index.css";
import { useTranslation } from "react-i18next";
import Header from "../../assets/components/header/Header";

function Home() {
	const { t } = useTranslation();

	return (
		<>
			<Header />
		</>
	);
}

export default Home;

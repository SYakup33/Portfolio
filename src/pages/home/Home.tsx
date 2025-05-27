import "./Home.css";
import "../../index.css";
import { useTranslation } from "react-i18next";
import Header from "../../assets/components/header/Header";
import Footer from "../../assets/components/footer/Footer";

function Home() {
	const { t } = useTranslation();

	return (
		<>
			<Header />
			<div className="div_home"> sqs </div>
			<Footer />
		</>
	);
}

export default Home;

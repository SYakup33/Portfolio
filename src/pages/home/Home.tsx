import "./Home.css";
import "../../index.css";
import { useTranslation } from "react-i18next";
import Header from "../../assets/components/header/Header";
import Footer from "../../assets/components/footer/Footer";
import devImage from "../../assets/images/hud/home_dev.svg";

interface ParagraphTypes {
	id: number;
	text: string;
}

function Home() {
	const { t, i18n } = useTranslation();
	const paragraphs = i18n.getResource(
		i18n.language,
		"translation",
		"home.content",
	) as ParagraphTypes[];

	return (
		<>
			<Header />
			<figure>
				<img src={devImage} alt={t("alt.devImage")} />
				<figcaption>
					<h1>{t("home.title")}</h1>
				</figcaption>
			</figure>
			{paragraphs.map((paragraph) => (
				<p className="content" key={paragraph.id}>
					{paragraph.text}
				</p>
			))}

			<Footer />
		</>
	);
}

export default Home;

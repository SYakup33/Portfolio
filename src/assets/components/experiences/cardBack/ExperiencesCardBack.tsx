import { useTranslation } from "react-i18next";
import "./ExperiencesCardBack.css";

function ExperiencesCardBack({ experience }) {
	const { t } = useTranslation();

	const cardBackTexts = t(experience.back.cardBackTextKey, {
		returnObjects: true,
	});

	return (
		<div className="experience_card_back">
			<div className="experience_card_back_content">
				<h1>{t(experience.front.title)}</h1>
				<h2>{t(experience.front.subTitle)}</h2>
				<ul>
					{cardBackTexts.map((item, index) => (
						<li key={index}>{item.text}</li>
					))}
				</ul>
			</div>

			<div className="experience_card_technos">
				{experience.back.logos.map((logo, index) => (
					<img key={index} src={logo.img} alt={t(logo.alt)} />
				))}
				<p>x++</p>
			</div>
		</div>
	);
}

export default ExperiencesCardBack;

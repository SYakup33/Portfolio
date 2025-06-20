import { useTranslation } from "react-i18next";
import "./ExperiencesCardBack.css";
type Logo = {
	img: string;
	alt: string;
};

type CardBackTextItem = {
	text: string;
};

type Experience = {
	front: {
		title: string;
		subTitle: string;
	};
	back: {
		cardBackTextKey: string;
		logos: Logo[];
	};
};

function ExperiencesCardBack({ experience }: { experience: Experience }) {
	const { t } = useTranslation();

	const cardBackTexts = t(experience.back.cardBackTextKey, {
		returnObjects: true,
	}) as CardBackTextItem[];

	return (
		<div className="experience_card_back">
			<div className="experience_card_back_content">
				<h1>{t(experience.front.title)}</h1>
				<h2>{t(experience.front.subTitle)}</h2>
				<ul>
					{cardBackTexts.map((item) => (
						<li key={item.text}>{item.text}</li>
					))}
				</ul>
			</div>

			<div className="experience_card_technos">
				{experience.back.logos.map((logo) => (
					<img key={logo.img} src={logo.img} alt={t(logo.alt)} />
				))}
				<p>x++</p>
			</div>
		</div>
	);
}

export default ExperiencesCardBack;

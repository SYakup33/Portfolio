import { useTranslation } from "react-i18next";
import calendar from "../../../images/experiences/cardFront/calendar.svg";
import "./ExperiencesCardFront.css";

interface ExperienceFront {
	imgCompany: string;
	altImgCompany: string;
	title: string;
	subTitle: string;
	imgWorkTechnology: string;
	years: string;
}

interface Experience {
	front: ExperienceFront;
}

interface ExperiencesCardFrontProps {
	experience: Experience;
}

function ExperiencesCardFront({ experience }: ExperiencesCardFrontProps) {
	const { t } = useTranslation();

	return (
		<div className="card_content_front">
			<img
				className="company"
				src={experience.front.imgCompany}
				alt={t(experience.front.altImgCompany)}
			/>
			<h1 className="title">{t(experience.front.title)}</h1>
			<h2 className="sub_title">{t(experience.front.subTitle)}</h2>
			<img
				className="work_technology"
				src={experience.front.imgWorkTechnology}
				alt={t("alt.workTechnologyMicrosoftDynamics")}
			/>
			<img className="calendar" src={calendar} alt={t("alt.calendar")} />
			<div className="calendar_years">
				<p>{t(experience.front.years)}</p>
				<p>{t("global.years")}</p>
			</div>
		</div>
	);
}

export default ExperiencesCardFront;

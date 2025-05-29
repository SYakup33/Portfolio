import { useTranslation } from "react-i18next";
import calendar from "../../../images/experiences/cardFront/calendar.svg";
import "./ExperiencesCardFront.css";

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
				alt={t("alt.company")}
			/>
			<h1 className="title">{t(experience.front.title)}</h1>
			<h2 className="sub_title">{t(experience.front.subTitle)}</h2>
			<img
				className="work_technology"
				src={experience.front.imgWorkTechnology}
				alt={t("alt.workTechnology")}
			/>
			<img className="calendar" src={calendar} alt={t("alt.calendar")} />
			<div className="calendar_years">
				<p>{t(experience.front.years)}</p>
				<p>{t("experiences.years")}</p>
			</div>
		</div>
	);
}

export default ExperiencesCardFront;

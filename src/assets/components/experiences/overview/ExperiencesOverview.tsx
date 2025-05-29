import "./ExperiencesOverview.css";
import { useTranslation } from "react-i18next";
import experiencesOverview from "../../../images/experiences/overview/experiences_overview.svg";

function ExperiencesOverview() {
	const { t } = useTranslation();
	const experiencesOverviewContent = t("experiences.overview.content", {
		returnObjects: true,
	});
	return (
		<>
			<article className="experiences_overview_article">
				<figure id="experiences_overview_figure">
					<figcaption>
						<h1 id="experiences_overview_title">
							{t("experiences.overview.title")}
						</h1>
					</figcaption>
					<img src={experiencesOverview} alt={t("alt.experiencesOverview")} />
				</figure>
				{experiencesOverviewContent.map((experience, index) => (
					<h3 className="experiences_overview_content" key={index}>
						{experience.text}
					</h3>
				))}
			</article>
			<hr className="content_change" />
		</>
	);
}

export default ExperiencesOverview;

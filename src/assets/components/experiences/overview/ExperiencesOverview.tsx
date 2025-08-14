import "./ExperiencesOverview.css";
import { useTranslation } from "react-i18next";
import experiencesOverview from "../../../images/experiences/overview/experiences_overview.svg";

interface Experience {
  text: string;
}

function ExperiencesOverview() {
  const { t } = useTranslation();

  const experiencesOverviewContent: Experience[] = t(
    "experiences.overview.content",
    { returnObjects: true }
  ) as Experience[];

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
        {experiencesOverviewContent.map((experience: Experience, index: number) => (
          <h2 className="experiences_overview_content" key={index}>
            {experience.text}
          </h2>
        ))}
      </article>
      <hr className="content_change" />
    </>
  );
}

export default ExperiencesOverview;

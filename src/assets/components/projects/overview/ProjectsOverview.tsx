import "./ProjectsOverview.css";
import { useTranslation } from "react-i18next";
import projectsOverview from "../../../images/projects/overview/projects_overview.svg";

interface Project {
  text: string;
}

function ProjectsOverview() {
  const { t } = useTranslation();

  const projectsOverviewContent: Project[] = t(
    "projects.overview.content",
    { returnObjects: true }
  ) as Project[];

  return (
    <>
      <article className="projects_overview_article">
        <figure id="projects_overview_figure">
          <figcaption>
            <h1 id="projects_overview_title">{t("projects.overview.title")}</h1>
          </figcaption>
          <img src={projectsOverview} alt={t("alt.projectsOverview")} />
        </figure>
        <h3 className="projects_overview_main">
          {t("projects.overview.main")}
        </h3>
        <ul className="projects_overview_list">
          {projectsOverviewContent.map((project: Project, index: number) => (
            <li className="projects_overview_item" key={index}>
              <h2>{project.text}</h2>
            </li>
          ))}
        </ul>
      </article>
      <hr className="content_change" />
    </>
  );
}

export default ProjectsOverview;

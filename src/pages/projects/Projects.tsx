import Header from "../../assets/components/header/Header";
import ProjectsOverview from "../../assets/components/projects/overview/ProjectsOverview";
import ProjectCardFront from "../../assets/components/projects/projectCardFront/ProjectCardFront";
import ProjectCardBack from "../../assets/components/projects/projectCardBack/ProjectCardBack";
import FlipCard from "../../assets/components/flipCard/projects/FlipCard";
import Footer from "../../assets/components/footer/Footer";
import { projects } from "../../data/projects";
import { useTranslation } from "react-i18next";
import "./Projects.css";

function Projects() {
	const { t } = useTranslation();
	return (
		<>
			<Header />
			<div className="page_content">
				<ProjectsOverview />
				<h1 id="project_section_title">{t("projects.cardSectionTitle")}</h1>
				<div className="cards_container">
					{projects.map((project) => (
						<FlipCard
							key={project.id}
							frontContent={<ProjectCardFront project={project} />}
							backContent={<ProjectCardBack project={project} />}
						/>
					))}
				</div>
			</div>

			<Footer />
		</>
	);
}

export default Projects;

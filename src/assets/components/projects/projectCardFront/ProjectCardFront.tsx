import "./ProjectCardFront.css";
import { useTranslation } from "react-i18next";

interface Project {
	front: {
		imgCompany: string;
		altImgCompany: string;
		title: string;
		subTitle: string;
		images: { image: string; alt: string }[];
		imagePlanner: string;
		time: number;
		timeType: string;
		peoples?: string;
		nbrPeople?: number;
		imageLink?: string;
		link?: string;
	};
}

interface ProjectCardFrontProps {
	project: Project;
}

function ProjectCardFront({ project }: ProjectCardFrontProps) {
	const { t } = useTranslation();

	return (
		<>
			<img
				className="project_company"
				src={project.front.imgCompany}
				alt={t(project.front.altImgCompany)}
			/>
			<h1 className="project_title">{t(project.front.title)}</h1>
			<h2 className="sub_title">{t(project.front.subTitle)}</h2>
			<div className="project_front_logos">
				{project.front.images.map((imageObj) => (
					<img
						key={imageObj.image}
						src={imageObj.image}
						alt={t(imageObj.alt)}
						className="project_front_logo"
					/>
				))}
			</div>
			<div className="other_images">
				<div className="planner">
					<img
						src={project.front.imagePlanner}
						alt={t("alt.planner")}
						className="project_front_logo"
					/>
					<p>
						{t(project.front.time.toString())}&nbsp;&nbsp;
						{t(project.front.timeType)}
					</p>
				</div>
				{project.front.peoples && (
					<div className="peoples">
						<img
							src={project.front.peoples}
							alt={t("alt.planner")}
							className="project_front_logo"
						/>
						<p>{t(project.front.nbrPeople?.toString() ?? "")}</p>
					</div>
				)}
				{project.front.imageLink && (
					<div className="link">
						<a href={project.front.link}>
							<img
								src={project.front.imageLink}
								alt={t("alt.planner")}
								className="project_front_logo"
							/>
						</a>
					</div>
				)}
			</div>
		</>
	);
}

export default ProjectCardFront;

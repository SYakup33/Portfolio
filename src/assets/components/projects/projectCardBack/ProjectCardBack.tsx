import "./ProjectCardBack.css";
import { useTranslation } from "react-i18next";

type ContentItem = {
	text: string;
};

type CardBackText = {
	descriptions?: string;
	objectives?: string;
	results?: string;
	content: ContentItem[];
};

type Project = {
	back: {
		cardBackTextKey: string;
	};
};

function ProjectCardBack({ project }: { project: Project }) {
	const { t } = useTranslation();

	const cardBackTexts = t(project.back.cardBackTextKey, {
		returnObjects: true,
	}) as CardBackText[];

	return (
		<>
			<h3 className="project_back_title">
				{t(cardBackTexts[0].descriptions || "")}
			</h3>
			<ul>
				{cardBackTexts[0].content.map((description: ContentItem) => (
					<li key={description.text}>{description.text}</li>
				))}
			</ul>

			<h3 className="project_back_title">
				{t(cardBackTexts[1].objectives || "")}
			</h3>
			<ul>
				{cardBackTexts[1].content.map((objectif: ContentItem) => {
					return <li key={objectif.text}>{objectif.text}</li>;
				})}
			</ul>
			<h3 className="project_back_title">
				{t(cardBackTexts[2].results || "")}
			</h3>
			<ul>
				{cardBackTexts[2].content.map((result: ContentItem) => {
					return <li key={result.text}>{result.text}</li>;
				})}
			</ul>
		</>
	);
}

export default ProjectCardBack;

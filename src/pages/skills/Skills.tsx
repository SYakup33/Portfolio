import Header from "../../assets/components/header/Header";
import { useTranslation } from "react-i18next";
import skills_overview_img from "../../../src/assets/images/skills/overview/skills.svg";
import "./Skills.css";
import Footer from "../../assets/components/footer/Footer";
import SkillTable from "../../assets/components/skills/table/SkillTable";
import SkillProgressBar from "../../assets/components/skills/progressBar/SkillProgressBar";
import { skills, progresBar } from "../../data/skills";

type SkillOverview = {
	text: string;
};

function Skills() {
	const { t } = useTranslation();

	const skilssOverviewContent = t("skills.overview.content", {
		returnObjects: true,
	}) as SkillOverview[];
	return (
		<>
			<Header />
			<figure id="skills_figure">
				<figcaption>
					<h1 id="skills_overview_title">{t("skills.overview.title")}</h1>
				</figcaption>
				<img src={skills_overview_img} alt={t("alt.skillsImage")} />
			</figure>
			{skilssOverviewContent.map((skillOverview: { text: string }) => (
				<h3 key={skillOverview.text} className="skills_overview_content">
					{skillOverview.text}
				</h3>
			))}

			{skills.map((skill) => (
				<SkillTable key={skill.id} skill={skill} />
			))}

			<SkillProgressBar progresBar={progresBar} />
			<Footer />
		</>
	);
}

export default Skills;

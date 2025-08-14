import "./SkillTable.css";
import { useTranslation } from "react-i18next";

interface SkillContent {
	text: string;
	checked: boolean;
}

interface Skill {
	id: number;
	title: string;
	content: string;
}

interface SkillProps {
	skill: Skill;
}

function SkillTable({ skill }: SkillProps) {
	const { t } = useTranslation();
	const contentList = t(skill.content, {
		returnObjects: true,
	}) as SkillContent[];

	return (
		<table id="skill_table">
			<thead id="skill_table_title">
				<tr>
					<th>{t(skill.title)}</th>
				</tr>
			</thead>
			<tbody>
				{contentList.map((item, index) => (
					<tr key={index} className="skills_table_items">
						<td className="skills_table_item">
							{item.text}
							{skill.checkedItems[index] && (
								<span className="checkmark">✔</span>
							)}
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}
export default SkillTable;

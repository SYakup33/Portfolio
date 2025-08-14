import "./SkillProgressBar.css";
type SkillProgress = {
	id: number;
	title: string;
	percent: number;
};

interface SkillProgressBarProps {
	progresBar: SkillProgress[];
}

function SkillProgressBar({ progresBar }: SkillProgressBarProps) {
	return (
		<table className="progress-table">
			<thead>
				<tr>
					<th colSpan={2}>Programmation</th>
				</tr>
			</thead>
			<tbody>
				{progresBar.map((progress) => (
					<tr key={progress.id}>
						<td className="progress-title">{progress.title}</td>
						<td>
							<div className="progress-container">
								<div className="progress-bar">
									<div
										className="progress-bar-fill"
										style={{ width: `${progress.percent}%` }}
									/>
								</div>
							</div>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}

export default SkillProgressBar;

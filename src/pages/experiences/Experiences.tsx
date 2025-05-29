import Header from "../../assets/components/header/Header";
import ExperiencesOverview from "../../assets/components/experiences/overview/ExperiencesOverview";
import Footer from "../../assets/components/footer/Footer";
import FlipCard from "../../assets/components/flipCard/FlipCard";
import ExperiencesCardFront from "../../assets/components/experiences/cardFront/ExperiencesCardFront";
import ExperiencesCardBack from "../../assets/components/experiences/cardBack/ExperiencesCardBack";
import { experiences } from "../../data/experiences";
import "./Experiences.css";

function Experiences() {
	return (
		<>
			<Header />
			<div className="page_content">
				<ExperiencesOverview />
				<div className="cards_container">
					{experiences.map((experience) => (
						<FlipCard
							key={experience.id}
							frontContent={<ExperiencesCardFront experience={experience} />}
							backContent={<ExperiencesCardBack experience={experience} />}
						/>
					))}
				</div>
			</div>

			<Footer />
		</>
	);
}

export default Experiences;

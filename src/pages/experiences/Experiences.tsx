import Header from "../../assets/components/header/Header";
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
			<div className="cards_container">
				{experiences.map((experience) => (
					<FlipCard
						key={experience.id}
						frontContent={<ExperiencesCardFront experience={experience} />}
						backContent={<ExperiencesCardBack experience={experience} />}
					/>
				))}
			</div>
			<Footer />
		</>
	);
}

export default Experiences;

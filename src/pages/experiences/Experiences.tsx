import Header from "../../assets/components/header/Header";
import FlipCard from "../../assets/components/flipCard/FlipCard";
import ExperiencesCard from "../../assets/components/experiences/card/ExperiencesCard";

function Experiences() {
	return (
		<>
			<Header />
			<FlipCard
				frontContent={<ExperiencesCard />}
				backContent={<h1>HelloBack</h1>}
			/>
		</>
	);
}

export default Experiences;

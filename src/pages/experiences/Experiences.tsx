import Header from "../../assets/components/header/Header";
import FlipCard from "../../assets/components/flipCard/FlipCard";

function Experiences() {
	return (
		<>
			<Header />
			<FlipCard
				frontContent={<h1>HelloFront</h1>}
				backContent={<h1>HelloBack</h1>}
			/>
		</>
	);
}

export default Experiences;

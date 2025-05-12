import { Link, useNavigate } from "react-router";

function Home() {
	return (
		<>
			<h1>page principal</h1>
			<Link to="/"> Home </Link>
			<Link to="/experiences"> Experiences </Link>
			<Link to="/projects"> Projets </Link>
			<Link to="/skills"> Compétences </Link>
		</>
	);
}

export default Home;

import { Link, useNavigate } from "react-router";

function Skills() {
	return (
		<>
			<h1>pages compétences</h1>
			<Link to="/"> Home </Link>
			<Link to="/experiences"> Experiences </Link>
			<Link to="/projects"> Projets </Link>
			<Link to="/skills"> Compétences </Link>
		</>
	);
}

export default Skills;

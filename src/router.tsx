import { createBrowserRouter } from "react-router";
import Home from "./pages/home/Home.tsx";
import "./pages/home/Home.css";
import Experiences from "./pages/experiences/Experiences.tsx";
import "./pages/experiences/Experiences.css";
import Projects from "./pages/projects/Projects.tsx";
import "./pages/home/Home.css";
import Skills from "./pages/skills/Skills.tsx";
import "./pages/home/Home.css";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/experiences",
		element: <Experiences />,
	},
	{
		path: "/projects",
		element: <Projects />,
	},
	{
		path: "/skills",
		element: <Skills />,
	},
]);

export default router;

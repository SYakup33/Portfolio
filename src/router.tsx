import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home.tsx";
import "./pages/home/Home.css";
import Experiences from "./pages/experiences/Experiences.tsx";
import "./pages/experiences/Experiences.css";
import Projects from "./pages/projects/Projects.tsx";
import Skills from "./pages/skills/Skills.tsx";

const router = createBrowserRouter(
	[
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
	],
	{
		basename: "/Portfolio",
	},
);

export default router;

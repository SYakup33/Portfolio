import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/home/Home";
import Experiences from "./pages/experiences/Experiences";
import Projects from "./pages/projects/Projects";
import Skills from "./pages/skills/Skills";

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

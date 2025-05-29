import Avanade from "../assets/images/experiences/cardFront/avanade.svg";
import microsoftDynamics from "../assets/images/experiences/cardFront/microsoft_dynamics.png";
import microsoftDynamics365 from "../assets/images/experiences/cardBack/microsoftD365.svg";
import ax2009 from "../assets/images/experiences/cardBack/ax2009.svg";
import ax2012 from "../assets/images/experiences/cardBack/ax2012.svg";
import d365fo from "../assets/images/experiences/cardBack/d365fo.svg";
import code from "../assets/images/experiences/cardBack/code.svg";

export const experiences = [
	{
		id: 1,
		front: {
			imgCompany: Avanade,
			imgWorkTechnology: microsoftDynamics,
			title: "experiences.avanade.cardFront.title",
			subTitle: "experiences.avanade.cardFront.subTitle",
			years: "~ 1.5 ",
		},
		back: {
			logos: [
				{
					img: microsoftDynamics365,
					alt: "alt.md365",
				},
				{
					img: ax2009,
					alt: "alt.ax2009",
				},
				{
					img: ax2012,
					alt: "alt.ax2012",
				},
				{
					img: d365fo,
					alt: "alt.d365fo",
				},
				{
					img: code,
					alt: "alt.code",
				},
			],
			cardBackTextKey: "experiences.avanade.cardBack",
		},
	},
];

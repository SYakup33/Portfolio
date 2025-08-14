import Aspdotnet from "../assets/images/projects/cardFront/aspdotnet.svg";
import Azure from "../assets/images/projects/cardFront/azure.svg";
import Blazor from "../assets/images/projects/cardFront/blazor.svg";
import Bootstrap from "../assets/images/projects/cardFront/bootstrap.svg";
import Csharp from "../assets/images/projects/cardFront/csharp.svg";
import Css from "../assets/images/projects/cardFront/css.svg";
import DevPic from "../assets/images/projects/cardFront/devPic.svg";
import Figma from "../assets/images/projects/cardFront/figma.svg";
import Github from "../assets/images/projects/cardFront/github.svg";
import Html from "../assets/images/projects/cardFront/html.svg";
import Javascript from "../assets/images/projects/cardFront/javascript.svg";
import Json from "../assets/images/projects/cardFront/json.svg";
import Link from "../assets/images/projects/cardFront/link.svg";
import Peoples from "../assets/images/projects/cardFront/peoples.svg";
import Planner from "../assets/images/projects/cardFront/planner.svg";
import ReactLogo from "../assets/images/projects/cardFront/react.svg";
import Typescript from "../assets/images/projects/cardFront/typescript.svg";
import WebForce3 from "../assets/images/projects/cardFront/webforce3.svg";
import WildCodeSchool from "../assets/images/projects/cardFront/wildcodeschool.svg";
import InnovPrint3D from "../assets/images/projects/cardFront/innovprint3d.svg";
import Express from "../assets/images/projects/cardFront/Express.svg";
import SQL from "../assets/images/projects/cardFront/SQL.svg";
import Postman from "../assets/images/projects/cardFront/Postman.svg";

export const projects = [
	{
		id: 1,
		title: "ListOfCapitals",
		front: {
			imgCompany: DevPic,
			altImgCompany: "alt.devPic",
			title: "projects.capitalList.cardFront.title",
			subTitle: "projects.capitalList.cardFront.subTitle",
			images: [
				{
					image: Html,
					alt: "alt.html",
				},
				{
					image: Css,
					alt: "alt.css",
				},
				{
					image: ReactLogo,
					alt: "alt.react",
				},
				{
					image: Typescript,
					alt: "alt.typescript",
				},
				{
					image: Json,
					alt: "alt.json",
				},
			],
			imagePlanner: Planner,
			time: 2,
			timeType: "global.days",
			nbrPeople: 1,
			peoples: Peoples,
		},
		back: { cardBackTextKey: "projects.capitalList.cardBack" },
	},
	{
		id: 2,
		title: "Portfolio",
		front: {
			imgCompany: DevPic,
			altImgCompany: "alt.devPic",
			title: "projects.portfolio.cardFront.title",
			subTitle: "projects.portfolio.cardFront.subTitle",
			images: [
				{
					image: Html,
					alt: "alt.html",
				},
				{
					image: Css,
					alt: "alt.css",
				},
				{
					image: Typescript,
					alt: "alt.typescript",
				},
				{
					image: ReactLogo,
					alt: "alt.react",
				},
				{
					image: Github,
					alt: "alt.github",
				},
				{
					image: Figma,
					alt: "alt.figma",
				},

				{
					image: Json,
					alt: "alt.json",
				},
			],
			imagePlanner: Planner,
			time: 1,
			timeType: "global.months",
			nbrPeople: 1,
			peoples: Peoples,
		},
		back: { cardBackTextKey: "projects.portfolio.cardBack" },
	},
	{
		id: 3,
		title: "Invicee",
		front: {
			imgCompany: WebForce3,
			altImgCompany: "alt.wf3",
			title: "projects.invicee.cardFront.title",
			subTitle: "projects.invicee.cardFront.subTitle",
			images: [
				{
					image: Html,
					alt: "alt.html",
				},
				{
					image: Css,
					alt: "alt.css",
				},
				{
					image: Blazor,
					alt: "alt.blazor",
				},
				{
					image: Csharp,
					alt: "alt.csharp",
				},
				{
					image: Aspdotnet,
					alt: "alt.aspdotnet",
				},
				{
					image: Azure,
					alt: "alt.azure",
				},

				{
					image: Github,
					alt: "alt.github",
				},
			],
			imagePlanner: Planner,
			time: 3,
			timeType: "global.months",
			nbrPeople: 1,
			peoples: Peoples,
		},
		back: { cardBackTextKey: "projects.invicee.cardBack" },
	},
	{
		id: 4,
		title: "Viteuf",
		front: {
			imgCompany: WildCodeSchool,
			altImgCompany: "alt.wcs",
			title: "projects.viteuf.cardFront.title",
			subTitle: "projects.viteuf.cardFront.subTitle",
			images: [
				{
					image: Html,
					alt: "alt.html",
				},
				{
					image: Css,
					alt: "alt.css",
				},
				{
					image: Javascript,
					alt: "alt.javascript",
				},
				{
					image: Bootstrap,
					alt: "alt.bootstrap",
				},
				{
					image: Figma,
					alt: "alt.figma",
				},
				{
					image: Github,
					alt: "alt.github",
				},
			],
			imagePlanner: Planner,
			time: 2,
			timeType: "global.weeks",
			nbrPeople: 3,
			peoples: Peoples,
			imageLink: Link,
			link: "https://viteuf-yakup.vercel.app/",
		},
		back: { cardBackTextKey: "projects.viteuf.cardBack" },
	},
	{
		id: 5,
		title: "Pokedex Patrol",
		front: {
			imgCompany: WildCodeSchool,
			altImgCompany: "alt.wcs",
			title: "projects.pokedexPatrol.cardFront.title",
			subTitle: "projects.pokedexPatrol.cardFront.subTitle",
			images: [
				{
					image: Html,
					alt: "alt.html",
				},
				{
					image: Css,
					alt: "alt.css",
				},
				{
					image: Typescript,
					alt: "alt.typescript",
				},
				{
					image: Json,
					alt: "alt.json",
				},
				{
					image: Figma,
					alt: "alt.figma",
				},
				{
					image: Github,
					alt: "alt.github",
				},
			],
			imagePlanner: Planner,
			time: 1,
			timeType: "global.months",
			nbrPeople: 4,
			peoples: Peoples,
			imageLink: Link,
			link: "https://pokedex-patrol-yakup.vercel.app/",
		},
		back: { cardBackTextKey: "projects.pokedexPatrol.cardBack" },
	},
	{
		id: 5,
		title: "InnovPrint3D",
		front: {
			imgCompany: InnovPrint3D,
			altImgCompany: "alt.innovprint3d",
			title: "projects.innovprint3d.cardFront.title",
			subTitle: "projects.innovprint3d.cardFront.subTitle",
			images: [
				{
					image: Html,
					alt: "alt.html",
				},
				{
					image: Css,
					alt: "alt.css",
				},
				{
					image: Typescript,
					alt: "alt.typescript",
				},
				{
					image: ReactLogo,
					alt: "alt.react",
				},
				{
					image: Express,
					alt: "alt.express",
				},
				{
					image: SQL,
					alt: "alt.sql",
				},
				{
					image: Postman,
					alt: "alt.postman",
				},
				{
					image: Github,
					alt: "alt.github",
				},
				{
					image: Json,
					alt: "alt.json",
				},
				{
					image: Figma,
					alt: "alt.figma",
				},
			],
			imagePlanner: Planner,
			time: 2,
			timeType: "global.months",
			nbrPeople: 4,
			peoples: Peoples,
		},
		back: { cardBackTextKey: "projects.innovprint3d.cardBack" },
	},
];

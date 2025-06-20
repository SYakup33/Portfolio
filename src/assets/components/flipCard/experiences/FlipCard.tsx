import { useState } from "react";
import FlipButton from "../FlipButton";
import "./FlipCard.css";
import ReactCardFlip from "react-card-flip";
import { useTranslation } from "react-i18next";

interface FlipCardProps {
	frontContent: React.ReactNode;
	backContent: React.ReactNode;
}

function FlipCard({ frontContent, backContent }: FlipCardProps) {
	const [isFlipped, setIsFlipped] = useState(false);

	const flipCard = () => setIsFlipped(!isFlipped);

	const { t } = useTranslation();

	return (
		<div className="my_experiences">
			<h1>{t("experiences.cardSectionTitle")}</h1>
			<ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
				<div className="card card_front">
					{frontContent}
					<FlipButton onClick={flipCard} isFlipped={isFlipped} />
				</div>
				<div className="card card_back">
					{backContent}
					<FlipButton onClick={flipCard} isFlipped={isFlipped} />
				</div>
			</ReactCardFlip>
		</div>
	);
}

export default FlipCard;

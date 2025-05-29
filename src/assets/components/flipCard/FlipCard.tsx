import { useState } from "react";
import FlipButton from "./FlipButton";
import "./FlipCard.css";
import ReactCardFlip from "react-card-flip";

interface FlipCardProps {
	frontContent: React.ReactNode;
	backContent: React.ReactNode;
}

function FlipCard({ frontContent, backContent }: FlipCardProps) {
	const [isFlipped, setIsFlipped] = useState(false);

	const flipCard = () => setIsFlipped(!isFlipped);

	return (
		<>
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
		</>
	);
}

export default FlipCard;

import { useState } from "react";
import FlipButton from "../FlipButton";
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
			<div className="my_projects">
				<ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
					<div className="card card_front_projects">
						{frontContent}
						<FlipButton onClick={flipCard} isFlipped={isFlipped} />
					</div>
					<div className="card card_back_projects">
						{backContent}
						<FlipButton onClick={flipCard} isFlipped={isFlipped} />
					</div>
				</ReactCardFlip>
			</div>{" "}
		</>
	);
}

export default FlipCard;

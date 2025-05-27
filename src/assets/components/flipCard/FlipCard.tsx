import { useState } from "react";
import FlipButton from "./ButtonFlip";
import "./FlipCard.css";

interface FlipCardProps {
	frontContent: React.ReactNode;
	backContent: React.ReactNode;
}

function FlipCard({ frontContent, backContent }: FlipCardProps) {
	const [isFlipped, setIsFlipped] = useState(false);

	const handleFlip = () => setIsFlipped(!isFlipped);

	return (
		<>
			<div className={`flip-card ${isFlipped ? "flipped" : ""}`}>
				<div className="flip-card-inner">
					<div className="flip-card-front">{frontContent}</div>
					<div className="flip-card-back">{backContent}</div>
				</div>
			</div>
			<FlipButton onClick={handleFlip} isFlipped={isFlipped} />
		</>
	);
}

export default FlipCard;

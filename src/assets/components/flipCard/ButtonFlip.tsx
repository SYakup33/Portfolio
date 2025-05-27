import "./ButtonFlip.css";

interface FlipButtonProps {
	onClick: () => void;
	isFlipped: boolean;
}

function FlipButton({ onClick, isFlipped }: FlipButtonProps) {
	return (
		<button type="button" className="flip-btn" onClick={onClick}>
			{isFlipped ? "Retourner" : "Voir l'arrière"}
		</button>
	);
}

export default FlipButton;

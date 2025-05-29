import { useTranslation } from "react-i18next";
import "./FlipButton.css";

interface FlipButtonProps {
	onClick: () => void;
	isFlipped: boolean;
}

function FlipButton({ onClick, isFlipped }: FlipButtonProps) {
	const { t } = useTranslation();
	return (
		<button type="button" className="flip_btn" onClick={onClick}>
			{isFlipped ? t("flipCard.buttonBack") : t("flipCard.buttonFront")}
		</button>
	);
}

export default FlipButton;

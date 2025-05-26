import "./LanguageButtonModal.css";

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	children: React.ReactNode;
}

function LanguageButtonModal({ isOpen, onClose, children }: ModalProps) {
	if (!isOpen) return null;

	return (
		<div className="modal_overlay" onClick={onClose} onKeyDown={onClose}>
			<div
				className="modal_content"
				onClick={(e) => e.stopPropagation()}
				onKeyDown={(e) => e.stopPropagation()}
			>
				<button
					type="button"
					className="modal_close"
					onClick={onClose}
					onKeyDown={onClose}
				>
					&times;
				</button>
				{children}
			</div>
		</div>
	);
}

export default LanguageButtonModal;

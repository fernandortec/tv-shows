import {
	type ReactElement,
	cloneElement,
	useEffect,
	useRef,
	useState,
	type ReactNode,
} from "react";
import styles from "./styles.module.css";
import { X } from "lucide-react";

interface DialogProps {
	children: ReactNode;
	trigger: ReactElement;
}

export function Dialog({ children, trigger }: DialogProps): JSX.Element {
	const [showModal, setShowModal] = useState<boolean>(false);

	const dialogRef = useRef<HTMLDialogElement>(null);

	useEffect(() => {
		if (showModal) {
			return dialogRef.current?.showModal();
		}

		dialogRef.current?.close();
	}, [showModal]);

	function handleOpenModal(): void {
		setShowModal(true);
	}

	function handleCloseModal(): void {
		setShowModal(false);
	}
	return (
		<>
			<div className={styles.trigger}>
				{cloneElement(trigger, { onClick: handleOpenModal })}
			</div>
			<dialog data-modal ref={dialogRef}>
				<button
					type="button"
					className={styles.close}
					onClick={handleCloseModal}
				>
					<X size={24} />
				</button>
				<div className={styles.content}>{children}</div>
			</dialog>
		</>
	);
}

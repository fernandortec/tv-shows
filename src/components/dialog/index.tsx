import { DialogContext } from "@/contexts/dialog-context";
import { X } from "lucide-react";
import {
	useEffect,
	useRef,
	useState,
	type ReactElement,
	type ReactNode,
} from "react";
import styles from "./styles.module.css";

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
		<DialogContext.Provider value={[showModal, setShowModal]}>
			<dialog data-modal ref={dialogRef}>
				<div className={styles.content}>
					<button
						type="button"
						className={styles.close}
						onClick={handleCloseModal}
					>
						<X size={24} />
					</button>

					{children}
				</div>
			</dialog>
		</DialogContext.Provider>
	);
}

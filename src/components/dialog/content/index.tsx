import { DialogContext } from "@/contexts/dialog-context";
import {
	type CSSProperties,
	useContext,
	useEffect,
	useRef,
	type ReactNode,
} from "react";
import styles from "./styles.module.css";

interface DialogContentProps {
	children: ReactNode;
	style?: CSSProperties;
}

export function DialogContent({
	children,
	style,
}: DialogContentProps): JSX.Element {
	const [showModal, setShowModal] = useContext(DialogContext);
	const dialogRef = useRef<HTMLDialogElement>(null);

	useEffect(() => {
		if (showModal) {
			dialogRef.current?.showModal();
		} else {
			dialogRef.current?.close();
		}
	}, [showModal]);

	function handleCloseDialog(): void {
		setShowModal(false);
	}

	return (
		<dialog data-modal ref={dialogRef} onClose={handleCloseDialog}>
			<div className={styles.content} style={style}>
				{children}
			</div>
		</dialog>
	);
}

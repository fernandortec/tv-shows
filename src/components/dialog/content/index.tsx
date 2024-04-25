import { useContext, useEffect, useRef, type ReactNode } from "react";
import styles from "./styles.module.css";
import { DialogContext } from "@/contexts/dialog-context";

interface DialogContentProps {
	children: ReactNode;
}

export function DialogContent({ children }: DialogContentProps): JSX.Element {
	const [showModal] = useContext(DialogContext);
	const dialogRef = useRef<HTMLDialogElement>(null);

	useEffect(() => {
		if (showModal) {
			dialogRef.current?.showModal();
		} else {
			dialogRef.current?.close();
		}
	}, [showModal]);

	return (
		<dialog data-modal ref={dialogRef}>
			<div className={styles.content}>{children}</div>
		</dialog>
	);
}

import { DialogContext } from '@/contexts/dialog-context';
import { type CSSProperties, useContext, useEffect, useRef, type ReactNode } from 'react';
import styles from './styles.module.css';

interface DialogContentProps {
	children: ReactNode;
	style?: CSSProperties;
	onClose?: () => void;
	className?: string;
}

export function DialogContent({
	children,
	style,
	onClose,
	className,
}: DialogContentProps): JSX.Element {
	const [showModal, setShowModal] = useContext(DialogContext);
	const dialogRef = useRef<HTMLDialogElement>(null);

	useEffect(() => {
		if (showModal) {
			dialogRef.current?.showModal();
		} else {
			dialogRef.current?.close();
		}
		document.body.setAttribute('data-open', String(showModal));
	}, [showModal]);

	function handleCloseDialog(): void {
		setShowModal(false);
		onClose?.();
	}

	return (
		<dialog data-modal ref={dialogRef} onClose={handleCloseDialog}>
			<div className={`${styles.content} ${className}`} style={style}>
				{children}
			</div>
		</dialog>
	);
}

import { DialogContext } from '@/contexts/dialog-context';
import { type ReactNode, useEffect, useRef, useState } from 'react';
import './styles.module.css';

interface DialogProps {
	children: ReactNode;
}

export function Dialog({ children }: DialogProps): JSX.Element {
	const [showModal, setShowModal] = useState<boolean>(false);
	const dialogRef = useRef<HTMLDialogElement>(null);

	useEffect(() => {
		if (showModal) {
			return dialogRef.current?.showModal();
		}
		dialogRef.current?.close();
	}, [showModal]);

	return (
		<DialogContext.Provider value={[showModal, setShowModal]}>
			{children}
		</DialogContext.Provider>
	);
}

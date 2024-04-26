import { X } from 'lucide-react';
import { DialogContext } from '@/contexts/dialog-context';
import { type ReactNode, useContext, type CSSProperties } from 'react';

import styles from './styles.module.css';
import { renderChildren } from '@/helpers/render-children';

interface DialogCloseProps {
	children?: ReactNode;
	asChild?: boolean;
	style?: CSSProperties;
	onClose?: () => void;
}

export function DialogClose({
	children,
	asChild,
	style,
	onClose,
}: DialogCloseProps): JSX.Element {
	const [_, setShowModal] = useContext(DialogContext);

	function handleCloseModal(): void {
		setShowModal(false);
		onClose?.();
	}

	return (
		<>
			{asChild ? (
				<div className={styles.wrapper} style={style}>
					{renderChildren({
						children,
						onClick: handleCloseModal,
						className: styles.close,
					})}
				</div>
			) : (
				<div className={styles.wrapper}>
					{/* biome-ignore lint/a11y/useValidAnchor: */}
					<a className={styles.close} onClick={handleCloseModal}>
						<X size={24} />
					</a>
				</div>
			)}
		</>
	);
}

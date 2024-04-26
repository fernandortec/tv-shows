import { DialogContext } from '@/contexts/dialog-context';
import { useContext, type ReactNode } from 'react';

import { renderChildren } from '@/helpers/render-children';
import styles from './styles.module.css';

interface DialogTriggerProps {
	children: ReactNode;
	asChild?: boolean;
	className?: string;
	onTriggerClick?: () => void;
}

export function DialogTrigger({
	children,
	asChild = false,
	className,
	onTriggerClick,
}: DialogTriggerProps): JSX.Element {
	const [_, setShowModal] = useContext(DialogContext);

	function handleOpenModal(): void {
		onTriggerClick?.();
		setShowModal(true);
	}

	return (
		<div className={className}>
			{asChild ? (
				renderChildren({
					children,
					onClick: handleOpenModal,
					className: `${styles.trigger} ${className}`,
				})
			) : (
				// biome-ignore lint/a11y/useKeyWithClickEvents:
				<div onClick={handleOpenModal}>{children}</div>
			)}
		</div>
	);
}

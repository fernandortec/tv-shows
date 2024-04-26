import type { ReactNode } from 'react';
import styles from './styles.module.css';

type Direction = 'top' | 'bottom' | 'both';

export interface FadedContainerProps {
	direction: Direction;
	children: ReactNode;
	containerClassName?: string;
}

export function FadedContainer({
	direction,
	children,
	containerClassName,
}: FadedContainerProps): JSX.Element {
	const classNameBasedOnDirection: { [key in Direction]: string } = {
		both: `${styles.fadeOutFromBottom} ${styles.fadeOutFromTop}`,
		bottom: styles.fadeOutFromBottom,
		top: styles.fadeOutFromTop,
	};

	const className = classNameBasedOnDirection[direction];

	return (
		<div className={containerClassName}>
			<div>
				<div className={className}>{children}</div>
			</div>
		</div>
	);
}

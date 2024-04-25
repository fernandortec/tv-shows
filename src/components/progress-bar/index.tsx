import styles from './styles.module.css';

interface ProgressBarProps {
	value?: number;
	className?: string;
}

export function ProgressBar({
	className,
	value,
}: ProgressBarProps): JSX.Element {
	return (
		<progress
			className={`${styles.progressRoot} ${className}`}
			value={value}
			max={100}
		>
			{value}%
		</progress>
	);
}

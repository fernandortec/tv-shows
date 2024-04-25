import * as Progress from "@radix-ui/react-progress";
import styles from "./styles.module.css";

interface PaginationProgressProps {
	className?: string;
	progressClassName?: string;
	totalValue?: number;
	currentValue?: number;
}

export function PaginationProgress({
	className,
	progressClassName,
	currentValue,
	totalValue,
}: PaginationProgressProps): JSX.Element {
	return (
		<Progress.Root
			className={`${styles.progressRoot} ${className}`}
			value={totalValue}
		>
			<Progress.Indicator
				className={`${styles.progressIndicator} ${progressClassName}`}
				style={{
					transform: `translateX(-${(totalValue ?? 0) - (currentValue ?? 0)}%)`,
				}}
			/>
		</Progress.Root>
	);
}

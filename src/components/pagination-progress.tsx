import * as Progress from "@radix-ui/react-progress";
import styles from "./pagination-progress.module.css";

interface PaginationProgressProps {
	className?: string;
	progressClassName?:string
}

export function PaginationProgress({
	className,
	progressClassName
}: PaginationProgressProps): JSX.Element {
	return (
		<Progress.Root
			className={`${styles.progressRoot} ${className}`}
			value={100}
		>
			<Progress.Indicator
				className={`${styles.progressIndicator} ${progressClassName}`}
				style={{ transform: `translateX(-${100 - 89}%)` }}
				/>
		</Progress.Root>
	);
}

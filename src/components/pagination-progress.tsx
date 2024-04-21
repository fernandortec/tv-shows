import * as Progress from "@radix-ui/react-progress";
import styles from "./pagination-progress.module.css";

export function PaginationProgress(): JSX.Element {
	return (
		<Progress.Root className={styles.progressRoot} value={100}>
			<Progress.Indicator
				className={styles.progressIndicator}
				style={{ transform: `translateX(-${100 - 89}%)` }}
			/>
		</Progress.Root>
	);
}

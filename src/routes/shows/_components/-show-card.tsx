import type { HTMLAttributes } from "react";
import styles from "./-show-card.module.css";

interface ShowCardProps extends HTMLAttributes<HTMLDivElement> {}

export function ShowCard(props: ShowCardProps): JSX.Element {
	return (
		<div className={styles.card} {...props} />
	);
}

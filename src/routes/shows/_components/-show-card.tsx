import type { Show } from "@/api/show-schema";
import { ShowDetailsDialog } from "@/routes/shows/_components/-show-details-dialog";
import type { HTMLAttributes } from "react";
import styles from "./-show-card.module.css";

interface ShowCardProps extends HTMLAttributes<HTMLDivElement> {
	show: Show;
}

export function ShowCard({ show, ...props }: ShowCardProps): JSX.Element {
	return (
		<ShowDetailsDialog show={show}>
			<div className={`${styles.card} fadeOutFromBottom`} {...props}>
				<h2>{show.name}</h2>
			</div>
		</ShowDetailsDialog>
	);
}

import { genresMap } from "@/helpers/available-genres";
import { ArrowRight } from "lucide-react";
import styles from "./-action-card.module.css";
import actionCover from "/assets/action-genre-cover.png";

interface ActionCardProps {
	genre: string;
}

export function ActionCard({ genre }: ActionCardProps): JSX.Element {
	return (
		<div className={styles.actionCard}>
			<img alt="" src={actionCover} />

			<footer>
				<p>{genresMap[genre as keyof typeof genresMap]}</p>
				<ArrowRight />
			</footer>
		</div>
	);
}

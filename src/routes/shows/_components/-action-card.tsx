import { genresMap } from "@/helpers/available-genres";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import styles from "./-action-card.module.css";

interface ActionCardProps {
	genre: string;
	idx: number;
}

export function ActionCard({ genre, idx }: ActionCardProps): JSX.Element {
	const assets = [
		"action-genre-cover",
		"adventure-genre-cover",
		"comedy-genre-cover",
		"drama-genre-cover",
	];

	return (
		<div className={styles.actionCard}>
			<img alt="" src={`/assets/${assets[idx % 4]}.png`} />

			<Link to="/shows" search={{ genre }}>
				<footer>
					<p>{genresMap[genre as keyof typeof genresMap]}</p>
					<ArrowRight />
				</footer>
			</Link>
		</div>
	);
}

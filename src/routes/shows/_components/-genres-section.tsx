import { genres as availableGenders } from "@/helpers/available-genres";
import { ActionCard } from "@/routes/shows/_components/-action-card";

import { Button } from "@/components/button";
import { PaginationProgress } from "@/components/pagination-progress";
import { paginate } from "@/helpers/paginate";
import { ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./-genres-section.module.css";

export function GenresSection(): JSX.Element {
	const genres = paginate({
		items: availableGenders,
		pageNumber: 1,
		pageSize: 50,
	});

	return (
		<div>
			<header className={styles.actionsHeader}>
				<h2>Gêneros disponíveis</h2>
			</header>

			<div className={styles.genresSection}>
				{genres.items.map((genre) => (
					<ActionCard genre={String(genre)} key={String(genre)} />
				))}
			</div>

			<footer className={styles.footer}>
				<Button variant="icon-only">
					<ChevronLeft />
				</Button>

				<PaginationProgress className={styles.progress} />

				<Button variant="icon-only">
					<ChevronRight />
				</Button>
			</footer>
		</div>
	);
}

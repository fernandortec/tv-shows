import { ActionCard } from "@/components/action-card";
import { genres as availableGenders } from "@/helpers/available-genres";

import { Button } from "@/components/button";
import { paginate } from "@/helpers/paginate";
import {
	ChevronLeft,
	ChevronRight,
	ChevronsLeft,
	ChevronsRight
} from "lucide-react";
import styles from "./-genres-section.module.css";

export function GenresSection(): JSX.Element {
	const genres = paginate({
		items: availableGenders,
		pageNumber: 1,
		pageSize: 5,
	});

	return (
		<div>
			<header className={styles.actionsHeader}>
				<h2>Gêneros disponíveis</h2>
				<div>
					<Button variant="icon-only">
						<ChevronsLeft />
					</Button>
					<Button variant="icon-only">
						<ChevronLeft />
					</Button>

					<h4>
						{1} / {genres.total}
					</h4>

					<Button variant="icon-only">
						<ChevronRight />
					</Button>
					<Button variant="icon-only">
						<ChevronsRight />
					</Button>
				</div>
			</header>
			<div className={styles.genresSection}>
				{genres.items.map((genre) => (
					<ActionCard genre={String(genre)} key={String(genre)} />
				))}
			</div>
		</div>
	);
}

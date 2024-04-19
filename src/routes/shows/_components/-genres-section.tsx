import { ActionCard } from "@/components/action-card";
import { genres as availableGenders } from "@/helpers/available-genres";

import styles from "./-genres-section.module.css";
import { paginate } from "@/helpers/paginate";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/button";

export function GenresSection(): JSX.Element {
	const genres = paginate({
		items: availableGenders,
		pageNumber: 1,
		pageSize: 5,
	});

	return (
		<div>
			<header>
				<h2>Gêneros disponíveis</h2>
				<div>
					<Button variant="icon-only">
						<ArrowLeft />
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

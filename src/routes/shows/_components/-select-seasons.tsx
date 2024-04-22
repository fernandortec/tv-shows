import { listAllSeasons } from "@/api/list-seasons";
import { useQuery } from "@tanstack/react-query";
import styles from "./-select-seasons.module.css";
import { ChevronDownIcon, ChevronsDownIcon } from "lucide-react";

interface SelectSeasonProps {
	showId: number;
}

export function SelectSeason({ showId }: SelectSeasonProps): JSX.Element {

	const { data: seasons } = useQuery({
		queryKey: ["season", showId],
		queryFn: () => listAllSeasons(showId),
	});

	return (
		<div className={styles.dropdown}>
			<div className={styles.header}>
				<h5>Episódios e temporadas</h5>
				<button className={styles.dropdownButton} type="button">
					Escolha uma temporada
					<ChevronDownIcon />
				</button>
			</div>

			<div className={styles.dropdownContent}>
				{seasons?.map((season, idx) => (
					<div key={season.id} className={styles.dropdownItem}>
						<p>Temporada {idx + 1}</p>
					</div>
				))}
			</div>
		</div>
	);
}

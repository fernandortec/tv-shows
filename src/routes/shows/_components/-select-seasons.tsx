import { listAllSeasons } from "@/services/list-seasons";
import { useSeasonStore } from "@/store/seasons-store";
import { useQuery } from "@tanstack/react-query";
import { ChevronDownIcon } from "lucide-react";
import { useEffect, useState } from "react";
import styles from "./-select-seasons.module.css";

interface SelectSeasonProps {
	showId: number;
}

export function SelectSeason({ showId }: SelectSeasonProps): JSX.Element {
	const [isActive, setIsActive] = useState<boolean>(false);

	const changeCurrentSeasonId = useSeasonStore(
		(state) => state.changeCurrentSeasonId,
	);
	const changeCurrentSeasonNumber = useSeasonStore(
		(state) => state.changeCurrentSeasonNumber,
	);

	const currentSeasonId = useSeasonStore((state) => state.currentSeasonId);
	const currentSeasonNumber = useSeasonStore(
		(state) => state.currentSeasonNumber,
	);

	const { data: seasons, isSuccess } = useQuery({
		queryKey: ["shows", "seasons", showId],
		queryFn: () => listAllSeasons(showId),
	});

	useEffect(() => {
		if (isSuccess) {
			changeCurrentSeasonId(seasons[0].id);
		}
	}, [isSuccess, changeCurrentSeasonId, seasons?.[0].id]);

	function changeVisibility(): void {
		setIsActive((state) => !state);
	}

	function handleSelectSeason(seasonId: number, seasonNumber: number): void {
		changeCurrentSeasonId(seasonId);
		changeCurrentSeasonNumber(seasonNumber);
	}

	return (
		<div className={styles.dropdown}>
			<div className={styles.header}>
				<h5>Episódios e temporadas</h5>
				<button
					className={styles.dropdownButton}
					type="button"
					onClick={changeVisibility}
				>
					Temporada {currentSeasonNumber ?? 1}
					<ChevronDownIcon />
				</button>
			</div>

			{isActive && (
				<div className={styles.dropdownContent}>
					{seasons?.map((season, idx) => (
						<button
							type="submit"
							key={season.id}
							className={styles.dropdownItem}
							data-active={currentSeasonId === season.id}
							onClick={() => handleSelectSeason(season.id, season.number)}
						>
							<p>Temporada {idx + 1}</p>
						</button>
					))}
				</div>
			)}
		</div>
	);
}

import { useSeasonStore } from '@/store/seasons-store';
import { useQuery } from '@tanstack/react-query';
import { ChevronDownIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import { seasonsServices } from '@/services/seasons/seasons-services';

import styles from './styles.module.css';

interface SelectSeasonProps {
	showId: number;
}

export function SelectSeason({ showId }: SelectSeasonProps): JSX.Element {
	const [isActive, setIsActive] = useState<boolean>(false);

	const changeCurrentSeason = useSeasonStore((state) => state.changeCurrentSeason);
	const currentSeason = useSeasonStore((state) => state.currentSeason);

	const { data: seasons, isSuccess } = useQuery({
		queryKey: ['shows', 'seasons', showId],
		queryFn: () => seasonsServices.listSeasons(showId),
		enabled: isActive
	});


	useEffect(() => {
		if (isSuccess) {
			changeCurrentSeason({ id: seasons[0].id, number: 1 });
		}
	}, [isSuccess, changeCurrentSeason, seasons?.[0].id]);

	function changeVisibility(): void {
		setIsActive((state) => !state);
	}

	function handleSelectSeason(seasonId: number, seasonNumber: number): void {
		changeCurrentSeason({ id: seasonId, number: seasonNumber });
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
					Temporada {currentSeason?.number ?? 1}
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
							data-active={currentSeason?.id === season.id}
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

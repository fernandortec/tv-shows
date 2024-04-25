import { ShowDetailsDialog } from '@/views/shows/_components/-show-details-dialog';
import type { HTMLAttributes } from 'react';
import styles from './-show-card.module.css';
import type { Show } from '@/services/schemas/shows';
import { truncateString } from '@/helpers/truncate-string';
import { genresMap } from '@/helpers/available-genres';

interface ShowCardProps extends HTMLAttributes<HTMLDivElement> {
	show: Show;
}

export function ShowCard({ show, ...props }: ShowCardProps): JSX.Element {
	return (
		<ShowDetailsDialog show={show}>
			<div className={`${styles.card}`} {...props}>
				<img src={show.image.medium} alt="" className="" />
				<div>
					<p>{show.name}</p>
					<span>{new Date(show.premiered).getFullYear()}</span>
					<footer>
						{show.genres.map((genre) => (
							<span className={styles.badge} key={genre}>
								{truncateString(genresMap[genre.toLowerCase()], 8)}
							</span>
						))}
					</footer>
				</div>
			</div>
		</ShowDetailsDialog>
	);
}

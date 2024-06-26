import { genresMap } from '@/helpers/available-genres';
import { languagesMap } from '@/helpers/languages-map';

import { useQuery } from '@tanstack/react-query';
import { Blocks, Calendar, Languages, Star, StarIcon } from 'lucide-react';
import { useState } from 'react';
import type { Show } from '@/services/shows/shows-model';
import { showsServices } from '@/services/shows/shows-services';

import styles from './styles.module.css';

interface ExtraShowInfoProps {
	show: Show;
}

export function ExtraShowInfo({ show }: ExtraShowInfoProps): JSX.Element {
	const { data: crew } = useQuery({
		queryKey: ['shows', 'crew'],
		queryFn: () => showsServices.getShowCrew(show.id),
	});

	const creator = crew?.find((person) => person.type === 'Creator');

	const [imgSrc, setImgSrc] = useState<string | undefined>('/assets/tv-white.svg');

	const onError = () => {
		setImgSrc('https://cdn-icons-png.freepik.com/512/6596/6596121.png');
	};

	return (
		<aside className={styles.container}>
			<header>
				<span className={styles.label}>
					<Calendar size={18} />
					Data de lançamento
				</span>
				<p className={styles.paragraphData}>{new Date(show.premiered).getFullYear()}</p>
			</header>

			<div>
				<span className={styles.label}>
					<Languages size={18} />
					Linguagens
				</span>
				<p className={styles.badge}>{languagesMap[show.language]}</p>
			</div>

			<div>
				<span className={styles.label}>
					<Blocks size={18} />
					Gêneros
				</span>
				<div className={styles.badgeWrapper}>
					{show.genres.map((genre) => (
						<p key={genre} className={styles.badge}>
							{genresMap[genre.toLowerCase()]}
						</p>
					))}
				</div>
			</div>

			<div>
				<span className={styles.label}>
					<Star size={18} />
					Avaliações
				</span>
				<div>
					<div className={styles.rating}>
						<p>Todas avaliações: </p>
						<div>
							<StarIcon />
							<p>
								{show.rating.average} / <span>10</span>
							</p>
						</div>
					</div>
				</div>
			</div>

			<div>
				<span className={styles.label}>Criador</span>
				<div className={styles.personContainer}>
					<img src={imgSrc} alt="" onError={onError} />
					<div>
						<p>{creator?.person.name ?? 'Não mencionado'}</p>
					</div>
				</div>
			</div>
		</aside>
	);
}

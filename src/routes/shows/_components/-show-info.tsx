import { getShowCrew } from "@/api/get-show-crew";
import type { Show } from "@/api/show-schema";
import { genresMap } from "@/helpers/available-genres";
import { languagesMap } from "@/helpers/languages-map";
import { renderStars } from "@/helpers/render-stars";
import { useQuery } from "@tanstack/react-query";
import { Blocks, Calendar, Languages, Star } from "lucide-react";
import styles from "./-show-info.module.css";

interface ShowInfoProps {
	show: Show;
}

export function ShowInfo({ show }: ShowInfoProps): JSX.Element {
	const { data: crew } = useQuery({
		queryKey: ["shows", "crew"],
		queryFn: () => getShowCrew(show.id),
	});

	const creator = crew?.find((person) => person.type === "Creator");

	return (
		<aside className={styles.container}>
			<header>
				<span className={styles.label}>
					<Calendar size={18} />
					Data de lançamento
				</span>
				<p className={styles.paragraphData}>
					{new Date(show.premiered).getFullYear()}
				</p>
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
							{renderStars(show.rating.average)}
							<p>{show.rating.average}</p>
						</div>
					</div>
				</div>
			</div>

			<div>
				<span className={styles.label}>Criador</span>
				<div className={styles.personContainer}>
					<img src={creator?.person.image.medium} alt="" />
					<div>
						<p>{creator?.person.name}</p>
					</div>
				</div>
			</div>
		</aside>
	);
}

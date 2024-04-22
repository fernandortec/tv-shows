import { useQuery } from "@tanstack/react-query";
import styles from "./-episodes.module.css";
import { listAllEpisodes } from "@/api/list-episodes";
import { useSeasonStore } from "@/store/season-store";
import { addZeroToNumber } from "@/helpers/add-zero";

export function Episodes(): JSX.Element {
	const currentSeasonId = useSeasonStore((state) => state.currentSeasonId);
	const currentSeasonNumber = useSeasonStore(
		(state) => state.currentSeasonNumber,
	);

	const { data: episodes } = useQuery({
		queryKey: ["shows", "episodes", currentSeasonId],
		queryFn: () => listAllEpisodes(currentSeasonId ?? 0),
		enabled: !!currentSeasonId,
	});

	return (
		<div className={styles.container}>
			<header>
				<p>
					Temporada {currentSeasonNumber ?? 1}
					<span> {episodes?.length} episódios</span>
				</p>
			</header>

			<ul className={styles.episodesList}>
				{" "}
				<hr />
				{episodes?.map((episode) => (
					<li key={episode.id}>
						<div className={styles.episodeContainer}>
							<p className={styles.episodeNumber}>
								{addZeroToNumber(episode.number)}
							</p>
							<div className={styles.imageContainer}>
								<div />
								<img
									src={episode?.image?.medium || episode?.image?.original}
									alt=""
								/>
							</div>
							<div className={styles.episodeAbout}>
								<p>{episode.name}</p>
								{/* biome-ignore lint/security/noDangerouslySetInnerHtml: */}
								<div dangerouslySetInnerHTML={{ __html: episode.summary }} />
							</div>
						</div>
						<hr />
					</li>
				))}
			</ul>
		</div>
	);
}

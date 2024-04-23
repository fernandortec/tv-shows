import { useQuery } from "@tanstack/react-query";
import styles from "./-episodes.module.css";
import { listAllEpisodes } from "@/api/list-episodes";
import { useSeasonStore } from "@/store/season-store";
import { addZeroToNumber } from "@/helpers/add-zero";
import { truncateString } from "@/helpers/truncate-string";
import { Clock } from "lucide-react";

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
							<div className={`${styles.imageContainer} fadeOutFromBottom `}>
								<img
									src="/assets/play-button.svg"
									alt=""
									className={styles.play}
								/>
								<img
									src={episode?.image?.medium || episode?.image?.original}
									alt=""
								/>
							</div>
							<div className={styles.episodeAbout}>
								<header>
									<p>{episode.name}</p>
									<div>
										<Clock />
										<span>{episode.airtime.split(":")[0]} min</span>
									</div>
								</header>
								<div
									/* biome-ignore lint/security/noDangerouslySetInnerHtml: */
									dangerouslySetInnerHTML={{
										__html: truncateString(episode.summary, 300),
									}}
								/>
							</div>
						</div>
						<hr />
					</li>
				))}
			</ul>
		</div>
	);
}

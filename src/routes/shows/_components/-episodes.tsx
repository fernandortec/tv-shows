import styles from "./-episodes.module.css";

export function Episodes(): JSX.Element {
	return (
		<div className={styles.container}>
			<header>
				<p>
					Temporada 1<span> 9 episódios</span>
				</p>
			</header>

			<ul className={styles.episodesList}>
				<li>
					<hr />
					<div className={styles.episodeContainer}>
						<p className={styles.episodeNumber}>01</p>
						<div className={styles.imageContainer}>
							<div />
							<img
								src="https://static.tvmaze.com/uploads/images/medium_landscape/1/4388.jpg"
								alt=""
							/>
						</div>
						<div className={styles.episodeAbout}>
							<p>Capítulo um, o desaparecimento de Will Byers</p>
							<span>
								On his way from a friend’s house, young Will sees something
								terrifying . Nearby, a sinister secret lurks in the depths of a
								government lab.
							</span>
						</div>
					</div>
					<hr />
				</li>
			</ul>
		</div>
	);
}

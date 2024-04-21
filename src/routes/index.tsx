import { Link, createFileRoute } from "@tanstack/react-router";

import homeRowOne from "/assets/home-row-one.png";
import homeRowTwo from "/assets/home-row-two.png";
import homeRowThree from "/assets/home-row-three.png";
import homeRowFour from "/assets/home-row-four.png";

import logo from "/assets/tv-white.svg";

import styles from "./index.module.css";
import { Button } from "@/components/button";

export const Route = createFileRoute("/")({
	component: () => <ShowsPage />,
});

function ShowsPage(): JSX.Element {
	return (
		<main className={styles.main}>
			<div className={styles.imageRows}>
				<img alt="" src={homeRowOne} />
				<img alt="" src={homeRowThree} />
				<img alt="" src={homeRowTwo} />
				<img alt="" src={homeRowFour} />
			</div>

			<section className={styles.infoSection}>
				<img alt="" src={logo} className={styles.centerLogo} />

				<h1>A melhor experiência de Streaming</h1>
				<p>
					TvShows é a melhor experiência de streaming para assistir aos seus
					filmes e programas favoritos sob demanda, a qualquer hora e em
					qualquer lugar.
					Com o TvShows, você pode desfrutar de uma ampla
					variedade de conteúdos, incluindo os últimos sucessos de bilheteria,
					filmes clássicos, programas de TV populares e muito mais.
					Você também pode criar suas próprias listas de reprodução, para encontrar
					facilmente conteúdo
				</p>

				<Button variant="play-now">Assista agora</Button>
			</section>
		</main>
	);
}

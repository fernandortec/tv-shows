import { getMainShow } from "@/api/get-main-show";
import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import htmlParser from "react-html-parser";

import { getAllShows } from "@/api/get-all-shows";
import { Button } from "@/components/button";
import { ShowCard } from "@/components/show-card";
import { GenresSection } from "@/routes/shows/_components/-genres-section";
import { Plus, ThumbsUp, Volume2Icon } from "lucide-react";
import styles from "./_components/index.module.css";

export const Route = createFileRoute("/shows/")({
	component: () => <ShowsPage />,
});

function ShowsPage(): JSX.Element {
	const { data: mainShow } = useQuery({
		queryKey: ["shows", "main"],
		queryFn: getMainShow,
	});

	const { data: allShows } = useQuery({
		queryKey: ["shows"],
		queryFn: getAllShows,
	});

	return (
		<main>
			<div className={styles.mainImageContainer}>
				<img alt="" src={mainShow?.image.original} />

				<div className={styles.about}>
					<h3>{mainShow?.name}</h3>

					{mainShow?.summary && htmlParser(mainShow?.summary)}

					<div className={styles.actions}>
						<Button variant="play-now">Ver agora</Button>
						<Button variant="icon-only">
							<Plus />
						</Button>
						<Button variant="icon-only">
							<ThumbsUp />
						</Button>

						<Button variant="icon-only">
							<Volume2Icon />
						</Button>
					</div>
				</div>
			</div>

			<section className={styles.cardsSection}>
				<Button variant="primary">Séries</Button>
				<GenresSection />

				<div className={styles.allShowsSection}>
					{allShows?.map((show) => (
						<ShowCard key={show.id} />
					))}
				</div>
			</section>
		</main>
	);
}

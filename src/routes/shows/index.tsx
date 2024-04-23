import { findAllShows } from "@/api/find-all-shows";
import { getMainShow } from "@/api/get-main-show";
import { Button } from "@/components/button";
import { GenresSection } from "@/routes/shows/_components/-genres-section";
import { ShowCard } from "@/routes/shows/_components/-show-card";
import { type SearchShowsSchema, searchShowsSchema } from "@/schemas/shows";
import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { Plus, ThumbsUp, Volume2Icon } from "lucide-react";
import styles from "./index.module.css";
import { useEffect } from "react";

export const Route = createFileRoute("/shows/")({
	component: () => <ShowsPage />,
	validateSearch: (searchParams: {
		[key: string]: string;
	}): SearchShowsSchema => searchShowsSchema.parse(searchParams),
});

function ShowsPage(): JSX.Element {
	const { name } = Route.useSearch();

	const { data: mainShow } = useQuery({
		queryKey: ["shows", "main"],
		queryFn: getMainShow,
	});

	const { data: allShows } = useQuery({
		queryKey: ["shows"],
		queryFn: findAllShows,
	});

	useEffect(() => {
		if (!name) return;

		const element = document.getElementById("shows-title");
		element?.scrollIntoView();
	}, [name]);

	return (
		<main>
			<div
				className={`${styles.mainImageContainer} fadeOutFromTop fadeOutFromBottom`}
			>
				<img alt="" src={mainShow?.image.original} />

				<div className={styles.about}>
					<h3>{mainShow?.name}</h3>

					{mainShow?.summary && (
						// biome-ignore lint/security/noDangerouslySetInnerHtml:
						<div dangerouslySetInnerHTML={{ __html: mainShow?.summary }} />
					)}

					<footer className={styles.actions}>
						<Button variant="play-now">Ver agora</Button>
						<div>
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
					</footer>
				</div>
			</div>

			<section className={styles.cardsSection} id="cards">
				<Button variant="primary">Séries</Button>
				<GenresSection />

				<p className={styles.showsTitle} id="shows-title">Navegue entre as séries: </p>
				<div className={styles.allShowsSection}>
					{allShows?.map((show) => (
						<ShowCard
							key={show.id}
							style={{ backgroundImage: `url(${show.image.medium})` }}
							show={show}
						/>
					))}
				</div>
			</section>
		</main>
	);
}

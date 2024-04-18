import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { getMainShow } from "@/api/get-main-show";
import htmlParser from "react-html-parser";

import styles from "./index.module.css";
import { Button } from "@/components/button";
import { Plus, Speaker, SpeakerIcon, ThumbsUp, Volume2Icon } from "lucide-react";

export const Route = createFileRoute("/shows/")({
	component: () => <ShowsPage />,
});

function ShowsPage(): JSX.Element {
	const { data: mainShow } = useQuery({
		queryKey: ["show", "main"],
		queryFn: getMainShow,
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
		</main>
	);
}

import { createFileRoute } from "@tanstack/react-router";
import styles from "./index.module.css";

import homeRowOne from "../../../public/assets/home-row-one.png";
import homeRowTwo from "../../../public/assets/home-row-two.png";
import homeRowThree from "../../../public/assets/home-row-three.png";
import homeRowFour from "../../../public/assets/home-row-four.png";

export const Route = createFileRoute("/_shows/")({
	component: () => <ShowsPage />,
});

function ShowsPage(): JSX.Element {
	return (
		<main className={styles.main}>
			<div className={styles.imageRows}>
				<img alt="" src={homeRowOne} className="first" />
				<img alt="" src={homeRowTwo} />
				<img alt="" src={homeRowThree} />
				<img alt="" src={homeRowFour} className="last" />
			</div>
		</main>
	);
}

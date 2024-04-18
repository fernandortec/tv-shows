import styles from "./header.module.css";
import logo from "/assets/tv-white.svg";

import { Navbar } from "./navbar";
import { Bell,Search} from "lucide-react";

export function Header(): JSX.Element {
	return (
		<header className={styles.header}>
			<div className={styles.logo}>
				<img alt="" src={logo} className={styles.logo} />
				<p>TvShows</p>
			</div>

			<Navbar />

			<div className={styles.actions}>
				<Search size="22" />
				<Bell size="22" />
			</div>
		</header>
	);
}

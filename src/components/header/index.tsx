import { HamburguerMenuDialog } from "@/components/header/hamburguer-menu";
import { Navbar } from "@/components/navbar";
import { NotificationsDialog } from "@/components/header/notification-dialog";
import { SearchInput } from "@/components/input";
import { Link } from "@tanstack/react-router";

import styles from "./styles.module.css";

export function Header(): JSX.Element {
	return (
		<header className={styles.header}>
			<Link to="/" className={styles.logo}>
				<img alt="" src="/assets/tv-white.svg" />
				TvShows
			</Link>

			<Navbar />
			
			<div className={styles.actions}>
				<SearchInput />
				<NotificationsDialog />
			</div>

			<HamburguerMenuDialog />
		</header>
	);
}

import styles from "./header.module.css";
import logo from "/assets/tv-white.svg";

import { HamburguerMenuDialog } from "@/components/hamburguer-menu-dialog";
import { NotificationsDialog } from "@/components/notifications-dialog";
import { SearchInput } from "@/components/search-input";
import { Link } from "@tanstack/react-router";
import { Navbar } from "./navbar";

export function Header(): JSX.Element {
	const isDeviceMobile =
		Math.min(window.screen.width, window.screen.height) < 768;

	return (
		<header className={styles.header}>
			<Link to="/" className={styles.logo}>
				<img alt="" src={logo} />
				<p>TvShows</p>
			</Link>

			{!isDeviceMobile ? (
				<>
					<Navbar />
					<div className={styles.actions}>
						<SearchInput />
						<NotificationsDialog />
					</div>
				</>
			) : (
				<HamburguerMenuDialog />
			)}
		</header>
	);
}

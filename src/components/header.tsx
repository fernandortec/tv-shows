import styles from "./header.module.css";
import logo from "/assets/tv-white.svg";

import { NotificationsDialog } from "@/components/notifications-dialog";
import { Link } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { Navbar } from "./navbar";

export function Header(): JSX.Element {
	return (
		<header className={styles.header}>
			<Link to="/" className={styles.logo}>
				<img alt="" src={logo} className={styles.logo} />
				<p>TvShows</p>
			</Link>

			<Navbar />

			<div className={styles.actions}>
				<Search size="24" />

				<NotificationsDialog />
			</div>
		</header>
	);
}

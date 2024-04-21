import styles from "./header.module.css";
import logo from "/assets/tv-white.svg";

import { Navbar } from "./navbar";
import { Bell, Search } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { NotificationsDialog } from "@/components/notifications-dialog";

export function Header(): JSX.Element {
	return (
		<header className={styles.header}>
			<Link to="/" className={styles.logo}>
				<img alt="" src={logo} className={styles.logo} />
				<p>TvShows</p>
			</Link>

			<Navbar />

			<div className={styles.actions}>
				<Search size="22" />

				<NotificationsDialog />
			</div>
		</header>
	);
}

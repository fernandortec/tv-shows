import { X } from "lucide-react";
import { Link } from "@tanstack/react-router";

import styles from "./styles.module.css";
import { Dialog } from "@/components/dialog";

function AllLinksWithCloseDialog(): JSX.Element {
	return (
		<ul className={styles.list}>
			<Link
				to="/"
				className={styles.navLink}
				data-current={location.pathname === "/"}
			>
				<li>Home</li>
			</Link>
			<Link
				to="/shows"
				className={styles.navLink}
				data-current={location.pathname === "/shows"}
			>
				<li>Filmes e séries</li>
			</Link>

			<Link
				to="/support"
				className={styles.navLink}
				data-current={location.pathname === "/support"}
			>
				<li>Suporte</li>
			</Link>

			<Link
				to="/pricing"
				className={styles.navLink}
				data-current={location.pathname === "/pricing"}
			>
				<li>Planos</li>
			</Link>
		</ul>
	);
}

export function HamburguerMenuDialog(): JSX.Element {
	return (
		<Dialog
			close={<AllLinksWithCloseDialog />}
			trigger={
				<img src="/assets/hamburguer-menu.svg" alt="Hamburguer Menu Icon" />
			}
		>
			<p>opa</p>
		</Dialog>
	);
}

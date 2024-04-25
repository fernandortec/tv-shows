import { Link, useRouterState } from "@tanstack/react-router";
import styles from "./styles.module.css";

export function Navbar(): JSX.Element {
	const { location } = useRouterState();

	return (
		<nav>
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
		</nav>
	);
}

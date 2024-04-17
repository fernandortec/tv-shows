import { Link } from "@tanstack/react-router";
import styles from "./navbar.module.css";

export function Navbar(): JSX.Element {
	return (
		<nav>
			<ul className={styles.list}>
				<Link className={styles.navLink}>
					<li>Home</li>
				</Link>
				<Link className={styles.navLink}>
					<li>Filmes e séries</li>
				</Link>
				<Link className={styles.navLink}>
					<li>Suporte</li>
				</Link>
				<Link className={styles.navLink} data-current="true">
					<li>Planos</li>
				</Link>
			</ul>
		</nav>
	);
}

import styles from "./header.module.css";
import logo from "../../public/tv-white.svg";
import { Navbar } from "./navbar";

export function Header(): JSX.Element {
	return (
		<header className={styles.header}>
			<div className={styles.logo}>
				<img alt="" src={logo} className={styles.logo} />
				<p>TvShows</p>
			</div>

			<Navbar />

			<div>
				<p>Se inscreva</p>
			</div>
		</header>
	);
}

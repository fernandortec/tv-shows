import styles from "./header.module.css";
import logo from "../../public/tv.svg"

export function Header(): JSX.Element {
	return (
		<header className={styles.header}>
			<div>
				<img alt="" src={logo} className={styles.logo} />
				<p>TvShows</p>
			</div>
		</header>
	);
}


import { Link } from "@tanstack/react-router";
import styles from "./-not-found.module.css";

export function NotFound(): JSX.Element {
	return (
		<div className={styles.container}>
			<h1>Página não encontrada</h1>
			<p>
				Voltar para a {""}
				<Link to="/">
					Home
				</Link>
			</p>
		</div>
	);
}

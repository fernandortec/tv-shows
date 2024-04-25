import { Link } from "@tanstack/react-router";
import styles from "./styles.module.css";

export function Footer(): JSX.Element {
	return (
		<footer className={styles.footer}>
			<nav>
				<ul className={styles.navList}>
					<li>
						<p>Home</p>
						<Link to="/shows">Categorias</Link>
						<Link to="/support">Dispositivos</Link>
						<Link to="/pricing">Preços</Link>
						<Link to="/support">FAQ</Link>
					</li>
					<li>
						<p>Filmes</p>
						<Link to="/shows">Gêneros</Link>
						<Link to="/shows">Bombando</Link>
						<Link to="/shows">Lançamentos</Link>
						<Link to="/shows">Popular</Link>
					</li>
					<li>
						<p>Séries</p>
						<Link to="/shows">Gêneros</Link>
						<Link to="/shows">Bombando</Link>
						<Link to="/shows">Lançamentos</Link>
						<Link to="/shows">Popular</Link>
					</li>
					<li>
						<p>Suporte</p>
						<Link to="/support">Entre em contato</Link>
					</li>
					<li>
						<p>Planos</p>
						<Link to="/pricing">Planos disponíveis</Link>
						<Link to="/pricing">Funcionalidades</Link>
					</li>
				</ul>
			</nav>

			<div className={styles.about}>
				<p>@{new Date().getFullYear()} TvShows. Todos direitos reservados</p>

				<div className={styles.downloads}>
					<a
						href="https://drive.google.com/drive/u/0/home"
						target="_blank"
						rel="noreferrer"
					>
						<span>Termos de Uso</span>
					</a>

					<a
						href="https://drive.google.com/drive/u/0/home"
						target="_blank"
						rel="noreferrer"
					>
						<span>Política de privacidade</span>
					</a>

					<a
						href="https://drive.google.com/drive/u/0/home"
						target="_blank"
						rel="noreferrer"
					>
						<span>Política de cookies</span>
					</a>
				</div>
			</div>
		</footer>
	);
}

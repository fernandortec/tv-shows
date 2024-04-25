import { Link } from "@tanstack/react-router";
import styles from "./footer.module.css";

export function Footer(): JSX.Element {
	return (
		<footer className={styles.footer}>
			<nav className={styles.nav}>
				<ul>
					<p>Home</p>
					<Link to="/shows">
						<li>Categorias</li>
					</Link>
					<Link to="/support">
						<li>Dispositivos</li>
					</Link>
					<Link to="/pricing">
						<li>Preços</li>
					</Link>
					<Link to="/support">
						<li>FAQ</li>
					</Link>
				</ul>
				<ul>
					<p>Filmes</p>
					<Link to="/shows">
						<li>Gêneros</li>
					</Link>
					<Link to="/shows">
						<li>Bombando</li>
					</Link>
					<Link to="/shows">
						<li>Lançamentos</li>
					</Link>
					<Link to="/shows">
						<li>Popular</li>
					</Link>
				</ul>
				<ul>
					<p>Séries</p>
					<Link to="/shows">
						<li>Gêneros</li>
					</Link>
					<Link to="/shows">
						<li>Bombando</li>
					</Link>
					<Link to="/shows">
						<li>Lançamentos</li>
					</Link>
					<Link to="/shows">
						<li>Popular</li>
					</Link>
				</ul>
				<ul>
					<p>Suporte</p>
					<Link to="/support">
						<li>Entre em contato</li>
					</Link>
				</ul>
				<ul>
					<p>Planos</p>
					<Link to="/pricing">
						<li>Planos disponíveis</li>
					</Link>
					<Link to="/pricing">
						<li>Funcionalidades</li>
					</Link>
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

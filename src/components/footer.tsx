import styles from "./footer.module.css";

export function Footer(): JSX.Element {
	return (
		<footer className={styles.footer}>
			<nav className={styles.nav}>
				<ul>
					<p>Home</p>
					<li>Categorias</li>
					<li>Dispositivos</li>
					<li>Preços</li>
					<li>FAQ</li>
				</ul>
				<ul>
					<p>Filmes</p>
					<li>Gêneros</li>
					<li>Bombando</li>
					<li>Lançamentos</li>
					<li>Popular</li>
				</ul>
				<ul>
					<p>Séries</p>
					<li>Gêneros</li>
					<li>Bombando</li>
					<li>Lançamentos</li>
					<li>Popular</li>
				</ul>
				<ul>
					<p>Suporte</p>
					<li>Entre em contato</li>	
				</ul>
				<ul>
					<p>Planos</p>
					<li>Planos disponíveis</li>
					<li>Funcionalidades</li>
				</ul>
			</nav>

			<div className={styles.about}>
				<p>@{new Date().getFullYear()} TvShows. Todos direitos reservados</p>

				<div>
					<span>Termos de Uso</span>
					<span>Política de privacidade</span>
					<span>Política de cookies</span>
				</div>
			</div>
		</footer>
	);
}

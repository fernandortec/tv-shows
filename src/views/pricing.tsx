import { createFileRoute } from "@tanstack/react-router";
import styles from "./pricing.module.css";
import { Button } from "@/components/button";

export const Route = createFileRoute("/pricing")({
	component: Pricing,
});

function Pricing(): JSX.Element {
	const formatPrice = new Intl.NumberFormat("pt-BR", {
		style: "currency",
		currency: "BRL",
	});

	return (
		<main className={styles.container}>
			<h1>Encontre o plano certo para você</h1>
			<p className={styles.description}>
				Junte-se ao TvShows e escolha entre nossas opções de assinatura
				flexíveis feitas sob medida para atender às suas preferências de
				visualização. Prepare-se para entretenimento sem parar!
			</p>

			<section className={styles.cardsContainer}>
				<div className={styles.card}>
					<p>Plano básico</p>
					<span>
						Aproveite uma extensa biblioteca de séries, com variedade de
						conteúdos, incluindo títulos lançados recentemente.
					</span>
					<p className={styles.price}>
						{formatPrice.format(9.99)}
						<span>/mês</span>
					</p>
					<footer>
						<Button variant="primary">Escolher plano</Button>
					</footer>
				</div>
				<div className={styles.card}>
					<p>Plano Standard</p>
					<span>
						Acesso a uma seleção ampla de séries, incluindo lançamentos recentes
						e conteúdo exclusivo.
					</span>
					<p className={styles.price}>
						{formatPrice.format(12.99)} <span>/mês</span>
					</p>
					<footer>
						<Button variant="primary">Escolher plano</Button>
					</footer>
				</div>
				<div className={styles.card}>
					<p>Plano Premium</p>
					<span>
						Acesso à melhor seleção de séries, incluindo todos os lançamentos
						mais recentes e visualização offline.
					</span>
					<p className={styles.price}>
						{formatPrice.format(14.99)}
						<span>/mês</span>
					</p>
					<footer>
						<Button variant="primary">Escolher plano</Button>
					</footer>
				</div>
			</section>
		</main>
	);
}

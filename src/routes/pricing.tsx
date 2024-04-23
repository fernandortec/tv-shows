import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute("/pricing")({
	component: Pricing,
});

function Pricing(): JSX.Element {
  return (
			<main>
				<h1>Encontre o plano certo para você</h1>
				<p>
					Junte-se ao TvShows e escolha entre nossas opções de assinatura
					flexíveis feitas sob medida para atender às suas preferências de
					visualização. Prepare-se para entretenimento sem parar!
				</p>
			</main>
		);
}
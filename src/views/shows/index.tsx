import { Button } from '@/components/button';
import { genresMap } from '@/helpers/available-genres';
import { findAllShows } from '@/services/find-all-shows';
import { getMainShow } from '@/services/get-main-show';
import { GenresSection } from '@/views/shows/_components/-genres-section';
import { ShowCard } from '@/views/shows/_components/-show-card';
import { useQuery } from '@tanstack/react-query';
import { Link, createFileRoute } from '@tanstack/react-router';
import { useEffect } from 'react';

import { MainShowBanner } from '@/views/shows/(components)/main-show-banner/_index';
import { z } from 'zod';
import styles from './styles.module.css';

const searchShowsSchema = z.object({
	genre: z.string().optional(),
	name: z.string().optional(),
});

type SearchShowsSchema = z.infer<typeof searchShowsSchema>;

export const Route = createFileRoute('/shows/')({
	component: () => <ShowsPage />,
	validateSearch: (searchParams: Record<string, string>): SearchShowsSchema =>
		searchShowsSchema.parse(searchParams),
});

function ShowsPage(): JSX.Element {
	const { name, genre } = Route.useSearch();

	const { data: mainShow } = useQuery({
		queryKey: ['shows', 'main'],
		queryFn: getMainShow,
	});

	const { data: allShows } = useQuery({
		queryKey: ['shows', name, genre],
		queryFn: () => findAllShows(name, genre),
	});

	useEffect(() => {
		if (!name && !genre) return;

		const element = document.getElementById('shows-title');
		element?.scrollIntoView();
	}, [name, genre]);

	return (
		<main>
			<MainShowBanner show={mainShow} />

			<section className={styles.cardsSection} id="cards">
				<Button variant="primary">Séries</Button>
				
				<GenresSection />

				<div className={styles.headerSection}>
					<div>
						<p className={styles.showsTitle} id="shows-title">
							Navegue entre as séries:{' '}
						</p>
						{!name && !genre && <span>Listando todas as séries</span>}
						{name && (
							<span>
								Listando séries com o nome {name}{' '}
								{genre && `e com o gênero ${genresMap[genre]}`}
							</span>
						)}
						{genre && <span>Listando séries com o gênero {genresMap[genre]}</span>}
					</div>

					<Link to="/shows">Remover filtros</Link>
				</div>
				{allShows?.length === 0 && (
					<p className={styles.error}>
						Não foi encontrado nenhuma série com este nome/gênero{' '}
						<Link to="/shows">Remover filtros</Link>
					</p>
				)}
				<div className={styles.allShowsSection}>
					{allShows?.map((show) => (
						<ShowCard key={show.id} show={show} />
					))}
				</div>
			</section>
		</main>
	);
}

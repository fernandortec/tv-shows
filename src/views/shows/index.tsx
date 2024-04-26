import { Button } from '@/components/button';
import { genresMap } from '@/helpers/available-genres';

import { GenresSection } from '@/views/shows/_components/-genres-section';
import { ShowCard } from '@/views/shows/_components/-show-card';
import { useQuery } from '@tanstack/react-query';
import { Link, createFileRoute } from '@tanstack/react-router';
import { useEffect } from 'react';

import { MainShowBanner } from '@/views/shows/(components)/main-show-banner/_index';

import styles from './styles.module.css';
import { type SearchShowsSchema, searchShowsSchema } from '@/views/shows/(validators)/_index';
import { showsServices } from '@/services/shows/shows-services';

export const Route = createFileRoute('/shows/')({
	component: () => <ShowsPage />,
	validateSearch: (searchParams: Record<string, string>): SearchShowsSchema =>
		searchShowsSchema.parse(searchParams),
});

function ShowsPage(): JSX.Element {
	const { name, genre } = Route.useSearch();

	const { data: mainShow } = useQuery({
		queryKey: ['shows', 'main'],
		queryFn: () => showsServices.getMainShow(169),
	});

	const { data: allShows } = useQuery({
		queryKey: ['shows', name, genre],
		queryFn: () => showsServices.findAllShows(name, genre),
	});

	useEffect(() => {
		if (!name && !genre) return;

		const element = document.getElementById('shows-title');
		element?.scrollIntoView();
	}, [name, genre]);

	const doesUrlHaveNoFilters = !name && !genre;
	const noShowsFound = allShows?.length === 0;

	return (
		<main>
			<MainShowBanner show={mainShow} />

			<section className={styles.cardsSection} id="cards">
				<Button disabled variant="primary">
					Séries
				</Button>

				<GenresSection />

				<div className={styles.headerSection}>
					<div>
						<p className={styles.showsTitle} id="shows-title">
							Navegue entre as séries:
						</p>
						{doesUrlHaveNoFilters && <span>Listando todas as séries</span>}
						{name && (
							<span>
								Listando séries com o nome {name}
								{genre && `e com o gênero ${genresMap[genre]}`}
							</span>
						)}
						{genre && <span>Listando séries com o gênero {genresMap[genre]}</span>}
					</div>

					<Link to="/shows">Remover filtros</Link>
				</div>
				{noShowsFound && (
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

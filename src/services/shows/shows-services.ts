import { capitalize } from '@/helpers/capitalize-first-letter';
import { baseClient } from '@/services/client';
import type { Crew, Show } from '@/services/shows/shows-model';

export const showsServices = {
	async getMainShow(showId: number): Promise<Show> {
		const mainShow = await baseClient.fetch<Show>(`/shows/${showId}`);
		return mainShow;
	},

	async findAllShows(name?: string, genre?: string): Promise<Show[]> {
		const shows = await baseClient.fetch<Show[]>('/shows');

		if (name) {
			const filteredByName = shows.filter((show) =>
				show.name.toLowerCase().includes(name.toLowerCase())
			);
			return filteredByName;
		}

		if (genre) {
			const filteredByGenre = shows.filter((show) =>
				show.genres.includes(capitalize(genre))
			);
			return filteredByGenre;
		}

		return shows;
	},

	async getShowCrew(showId: number): Promise<Crew[]> {
		const crew = await baseClient.fetch<Crew[]>(`/shows/${showId}/crew`);
		return crew;
	},
};

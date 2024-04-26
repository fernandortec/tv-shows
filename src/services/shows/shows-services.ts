import { baseClient } from '@/services/client';
import type { Crew, Show } from '@/services/shows/shows-model';

export const showsServices = {
	async getMainShow(showId: string): Promise<Show> {
		const mainShow = await baseClient.fetch<Show>(`/shows/${showId}`);
		return mainShow;
	},

	async findAllShows(): Promise<Show[]> {
		const shows = await baseClient.fetch<Show[]>('/shows');
		return shows;
	},

	async getShowCrew(showId: string): Promise<Crew[]> {
		const crew = await baseClient.fetch<Crew[]>(`/shows/${showId}/crew`);
		return crew;
	},
};

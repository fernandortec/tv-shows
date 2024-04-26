import { baseClient } from '@/services/client';
import type { Season } from '@/services/seasons/seasons-model';

export const seasonsServices = {
	async listSeasons(showId: string): Promise<Season[]> {
		const seasons = await baseClient.fetch<Season[]>(`/shows/${showId}/seasons`);
		return seasons;
	},
};

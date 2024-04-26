import type { Episode } from '@/services/episodes/episodes-model';
import { baseClient } from '@/services/client';

export const episodesServices = {
	async listEpisodes(seasonId: string): Promise<Episode[]> {
		const episodes = await baseClient.fetch<Episode[]>(`/shows/${seasonId}/episodes`);
		return episodes;
	},
};

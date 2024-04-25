export interface Season {
	id: number;
	url: string;
	number: number;
	name: string;
	episodeOrder: number;
	premiereDate: string;
	endDate: string;
	network: {
		id: number;
		name: string;
		country: {
			name: string;
			code: string;
			timezone: string;
		};
		officialSite: string;
	};
	webChannel: null;
	image: {
		medium: string;
		original: string;
	};
	summary: string;
	_links: {
		self: {
			href: string;
		};
	};
}

export async function listAllSeasons(showId: number): Promise<Season[]> {
	const response = await fetch(
		`https://api.tvmaze.com/shows/${showId}/seasons`,
	);
	const data = await response.json();

	return data;
}

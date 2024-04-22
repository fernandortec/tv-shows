export interface Episode {
	id: number;
	url: string;
	name: string;
	season: number;
	number: number;
	type: string;
	airdate: string;
	airtime: string;
	airstamp: string;
	runtime: number;
	rating: {
		average: number;
	};
	image: {
		medium: string;
		original: string;
	};
	summary: string;
	_links: {
		self: {
			href: string;
		};
		show: {
			href: string;
			name: string;
		};
	};
}
export async function listAllEpisodes(showId: string): Promise<Episode[]> {
	const response = await fetch(
		`https://api.tvmaze.com/shows/${showId}/episodes`,
	);
	const data = await response.json();

	return data;
}

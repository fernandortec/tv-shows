interface Show {
	id: number;
	url: string;
	name: string;
	type: string;
	language: string;
	genres: string[];
	status: string;
	runtime: number;
	averageRuntime: number;
	premiered: string;
	ended: string;
	officialSite: string | null;
	schedule: {
		time: string;
		days: string[];
	};
	rating: {
		average: number;
	};
	weight: number;
	network: {
		id: number;
		name: string;
		country: {
			name: string;
			code: string;
			timezone: string;
		};
		officialSite: string | null;
	};
	webChannel: string | null;
	dvdCountry: string | null;
	externals: {
		tvrage: number;
		thetvdb: number;
		imdb: string;
	};
	image: {
		medium: string;
		original: string;
	};
	summary: string;
	updated: number;
	_links: {
		self: {
			href: string;
		};
		previousepisode: {
			href: string;
			name: string;
		};
	};
}

export async function getMainShow(): Promise<Show> {
	const randomShowId = Math.floor(Math.random() * 600) + 1;

	const response = await fetch(`https://api.tvmaze.com/shows/169`);
	const data = await response.json();

	return data;
}

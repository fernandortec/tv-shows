export interface Show {
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

interface Country {
	name: string;
	code: string;
	timezone: string;
}

interface Image {
	medium: string;
	original: string;
}

interface Person {
	id: number;
	url: string;
	name: string;
	country: Country;
	birthday: string;
	deathday: string | null;
	gender: string;
	image: Image;
	updated: number;
	_links: {
		self: {
			href: string;
		};
	};
}

export interface Crew {
	type: string;
	person: Person;
}

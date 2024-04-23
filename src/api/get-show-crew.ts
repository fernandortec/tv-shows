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

export async function getShowCrew(showId: number): Promise<Crew[]> {
	const response = await fetch(
		`https://api.tvmaze.com/shows/${showId}/crew`,
	);
	const data = await response.json();

	return data;
}

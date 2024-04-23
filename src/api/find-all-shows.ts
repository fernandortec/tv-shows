import { capitalize } from "@/helpers/capitalize-first-letter";
import type { Show } from "@/schemas/shows";

export async function findAllShows(
	name?: string,
	genre?: string,
): Promise<Show[]> {
	const response = await fetch("https://api.tvmaze.com/shows");
	const data: Show[] = await response.json();

	if (name) {
		const filteredByName = data.filter((show) => show.name.includes(name));
		return filteredByName;
	}

	if (genre) {
		const filteredByGenre = data.filter((show) => {
			console.log(genre, show.genres);
			return show.genres.includes(capitalize(genre));
		});
		return filteredByGenre;
	}

	return data;
}

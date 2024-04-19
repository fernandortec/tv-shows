import type { Show } from "@/api/show-schema";

export async function getMainShow(): Promise<Show> {
	const randomShowId = Math.floor(Math.random() * 600) + 1;

	const response = await fetch(`https://api.tvmaze.com/shows/169`);
	const data = await response.json();

	return data;
}

import type { Show } from "@/services/schemas/shows";

export async function getMainShow(): Promise<Show> {
	const response = await fetch("https://api.tvmaze.com/shows/169");
	const data = await response.json();

	return data;
}
import type { Show } from "@/api/show-schema";

export async function findAllShows(): Promise<Show[]> {
	const response = await fetch("https://api.tvmaze.com/shows");
	const data = await response.json();

	return data;
}

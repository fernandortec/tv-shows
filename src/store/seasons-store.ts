import { create } from 'zustand';

interface SeasonInStore {
	id: number | null;
	number: number | null;
}

export interface SeasonStore {
	currentSeason: SeasonInStore | null;
	changeCurrentSeason: (season: SeasonInStore | null) => void;
}

export const useSeasonStore = create<SeasonStore>((set) => ({
	currentSeason: null,
	changeCurrentSeason: (season: SeasonInStore | null) =>
		set(() => ({ currentSeason: season })),
}));

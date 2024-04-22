import { create } from "zustand";

export interface SeasonStore {
	currentSeasonId: number | null;
	currentSeasonNumber: number | null;
	changeCurrentSeasonId: (season: number) => void;
	changeCurrentSeasonNumber: (number: number) => void;
}

export const useSeasonStore = create<SeasonStore>((set) => ({
	currentSeasonId: null,
	currentSeasonNumber: null,
	changeCurrentSeasonNumber: (number: number) =>
		set(() => ({ currentSeasonNumber: number })),
	changeCurrentSeasonId: (season: number) =>
		set(() => ({ currentSeasonId: season })),
}));

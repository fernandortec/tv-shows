import { create } from "zustand";

export interface SeasonStore {
	currentSeasonId: number | null;
	currentSeasonNumber: number | null;
	changeCurrentSeasonId: (season: number | null) => void;
	changeCurrentSeasonNumber: (number: number | null) => void;
}

export const useSeasonStore = create<SeasonStore>((set) => ({
	currentSeasonId: null,
	currentSeasonNumber: null,
	changeCurrentSeasonNumber: (number: number | null) =>
		set(() => ({ currentSeasonNumber: number })),
	changeCurrentSeasonId: (season: number | null) =>
		set(() => ({ currentSeasonId: season })),
}));

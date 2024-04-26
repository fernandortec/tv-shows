const BASE_URL = import.meta.env.BASE_URL;

export const baseClient = {
	fetch: async <T>(url: string, options?: RequestInit): Promise<T> => {
		const response = await fetch(`${BASE_URL}${url}`, options);
		if (!response.ok) {
			throw new Error(`Failed to fetch ${url}`);
		}
		return response.json() as Promise<T>;
	},
};

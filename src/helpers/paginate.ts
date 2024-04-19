interface PaginateParams {
	items: unknown[];
	pageSize: number;
	pageNumber: number;
}

interface PaginationResponse {
	previousPage: number | null;
	nextPage: number | null;
	total: number;
	totalPages: number;
	items: unknown[];
}

export function paginate({
	items,
	pageNumber,
	pageSize,
}: PaginateParams): PaginationResponse {
	const offset = pageSize * (pageNumber - 1);
	const totalPages = Math.ceil(items.length / pageSize);
	const paginatedItems = items.slice(offset, pageSize * pageNumber);

	return {
		previousPage: pageNumber - 1 ? pageNumber - 1 : null,
		nextPage: totalPages > pageNumber ? pageNumber + 1 : null,
		total: items.length,
		totalPages: totalPages,
		items: paginatedItems,
	};
}

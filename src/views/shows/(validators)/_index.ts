import { z } from 'zod';

export const searchShowsSchema = z.object({
	genre: z.string().optional(),
	name: z.string().optional(),
});

export type SearchShowsSchema = z.infer<typeof searchShowsSchema>;

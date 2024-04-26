import {
	Outlet,
	type Router,
	RouterProvider as TanStackRouterProvider,
	createMemoryHistory,
	createRootRoute,
	createRoute,
	createRouter,
} from '@tanstack/react-router';
import type queries from '@testing-library/dom/types/queries';
import { render, type RenderResult } from '@testing-library/react';

interface RouterProviderProps {
	path: string;
	element: JSX.Element;
	initialEntries?: string;
}

interface CustomRouterProviderOutput {
	wrapper: RenderResult<typeof queries, HTMLElement, HTMLElement>;
	router: Router;
}

export async function CustomRouterProvider({
	element,
	path,
	initialEntries,
}: RouterProviderProps): Promise<CustomRouterProviderOutput> {
	const rootRoute = createRootRoute({ component: () => <Outlet /> });
	const componentRoute = createRoute({
		path,
		getParentRoute: () => rootRoute,
		component: () => element,
	});

	const router = createRouter({
		history: createMemoryHistory({
			initialEntries: [initialEntries ?? path],
		}),
		routeTree: rootRoute.addChildren([componentRoute]),
	});

	router.isServer = true;

	await router.load();

	const wrapper = render(<TanStackRouterProvider router={router} />);

	return { wrapper, router };
}

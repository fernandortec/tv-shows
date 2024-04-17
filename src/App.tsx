import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./@types/route-tree.gen";

const router = createRouter({ routeTree });

export function App(): JSX.Element {
	return <RouterProvider router={router} />;
}

import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./@types/route-tree.gen";
import "./global.css";

const router = createRouter({ routeTree });

export function App(): JSX.Element {
	return <RouterProvider router={router} />;
}

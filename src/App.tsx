import { RouterProvider, createRouter } from "@tanstack/react-router";
import { QueryClientProvider } from "@tanstack/react-query";
import { routeTree } from "./@types/route-tree.gen";
import "./global.css";
import { queryClient } from "@/lib/react-query";

const router = createRouter({ routeTree });

export function App(): JSX.Element {
	return (
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
		</QueryClientProvider>
	);
}

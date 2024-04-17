import { Outlet, createRootRoute } from "@tanstack/react-router";
import { Header } from "../components/header";

export const Route = createRootRoute({
	component: () => (
		<>
			<Header />
			<Outlet />
		</>
	),
});

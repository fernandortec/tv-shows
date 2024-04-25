import { Outlet, createRootRoute } from "@tanstack/react-router";
import { Header } from "../components/header";
import { Footer } from "@/components/footer";
import { NotFound } from "@/routes/-not-found";
import { ErrorComponent } from "@/routes/-error";

export const Route = createRootRoute({
	component: () => (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	),
	notFoundComponent: () => <NotFound />,
	errorComponent: () => <ErrorComponent />,
});

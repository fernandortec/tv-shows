import { Outlet, createRootRoute } from "@tanstack/react-router";
import { Header } from "../components/header";
import { Footer } from "@/components/footer";

export const Route = createRootRoute({
	component: () => (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	),
});

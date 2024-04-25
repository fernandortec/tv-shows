import { Outlet, createRootRoute } from '@tanstack/react-router';
import { Header } from '../components/header';
import { Footer } from '@/components/footer';
import { NotFound } from '@/views/-not-found';
import { ErrorComponent } from '@/views/-error';

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

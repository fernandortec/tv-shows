import { Outlet, createRootRoute } from '@tanstack/react-router';
import { Header } from '../components/header';
import { Footer } from '@/components/footer';
import { NotFoundPage } from '@/views/not-found';
import { ErrorPage } from '@/views/error';

export const Route = createRootRoute({
	component: () => (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	),
	notFoundComponent: () => <NotFoundPage />,
	errorComponent: () => <ErrorPage />,
});

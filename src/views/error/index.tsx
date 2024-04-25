import { Link, createFileRoute } from '@tanstack/react-router';
import styles from './styles.module.css';

export const Route = createFileRoute('/error/')({
	component: () => <ErrorPage />,
});

export function ErrorPage(): JSX.Element {
	return (
		<div className={styles.container}>
			<h1>Whoops, algo aconteceu....</h1>
			<p>Um erro não identificado aconteceu na aplicação.</p>
			<p>
				Voltar para a {''}
				<Link to="/">Home</Link>
			</p>
		</div>
	);
}

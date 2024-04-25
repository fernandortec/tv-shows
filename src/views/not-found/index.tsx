import { Link, createFileRoute } from '@tanstack/react-router';
import styles from './styles.module.css';

export const Route = createFileRoute('/not-found/')({
	component: () => <div>Hello /not-found/!</div>,
});

export function NotFoundPage(): JSX.Element {
	return (
		<div className={styles.container}>
			<h1>Página não encontrada</h1>
			<p>
				Voltar para a {''}
				<Link to="/">Home</Link>
			</p>
		</div>
	);
}

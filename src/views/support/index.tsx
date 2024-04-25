import { createFileRoute } from '@tanstack/react-router';
import styles from './styles.module.css';

export const Route = createFileRoute('/support/')({
	component: Support,
});

function Support(): JSX.Element {
	return (
		<div className={styles.container}>
			<h1>Precisa de ajuda?</h1>
			<p>
				Caso necessite de algum auxílio em utilizar a plataforma, contate o
				e-mail
				<a href="mailto:fernandorfigueiredotec@gmail.com">
					fernandorfigueiredotec@gmail.com
				</a>
			</p>
		</div>
	);
}

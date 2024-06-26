import { Link } from '@tanstack/react-router';

import { Dialog } from '@/components/dialog';
import { DialogClose } from '@/components/dialog/close';
import { DialogContent } from '@/components/dialog/content';
import { DialogTrigger } from '@/components/dialog/trigger';
import styles from './styles.module.css';

export function HamburguerMenuDialog(): JSX.Element {
	return (
		<Dialog>
			<DialogTrigger className={styles.trigger} asChild>
				<img src="/assets/hamburguer-menu.svg" alt="Hamburguer Menu Icon" />
			</DialogTrigger>
			<DialogContent className={styles.content}>
				<DialogClose />

				<ul className={styles.list}>
					<DialogClose asChild style={{ position: 'relative', display: 'block' }}>
						<Link
							to="/"
							className={styles.navLink}
							data-current={location.pathname === '/'}
						>
							<li>Home</li>
						</Link>
					</DialogClose>

					<DialogClose asChild style={{ position: 'relative', display: 'block' }}>
						<Link
							to="/shows"
							className={styles.navLink}
							data-current={location.pathname === '/shows'}
						>
							<li>Filmes e séries</li>
						</Link>
					</DialogClose>

					<DialogClose asChild style={{ position: 'relative', display: 'block' }}>
						<Link
							to="/support"
							className={styles.navLink}
							data-current={location.pathname === '/support'}
						>
							<li>Suporte</li>
						</Link>
					</DialogClose>

					<DialogClose asChild style={{ position: 'relative', display: 'block' }}>
						<Link
							to="/pricing"
							className={styles.navLink}
							data-current={location.pathname === '/pricing'}
						>
							<li>Planos</li>
						</Link>
					</DialogClose>
				</ul>
			</DialogContent>
		</Dialog>
	);
}

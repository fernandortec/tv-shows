import { Dialog } from '@/components/dialog';
import { DialogTrigger } from '@/components/dialog/trigger';
import type { ReactNode } from 'react';

import styles from './styles.module.css';
import { DialogContent } from '@/components/dialog/content';
import type { Show } from '@/services/schemas/shows';
import { DialogClose } from '@/components/dialog/close';
import { ArrowLeft } from 'lucide-react';

interface ShowDetailsDialogProps {
	children: ReactNode;
	show?: Show;
}

export function ShowDetailsDialog({ children }: ShowDetailsDialogProps): JSX.Element {
	return (
		<Dialog>
			<DialogTrigger className={styles.trigger} asChild>
				{children}
			</DialogTrigger>

			<DialogContent style={{ width: '100vw', height: '100vh' }}>
				<DialogClose />
				<DialogClose asChild>
					<ArrowLeft style={{ cursor: 'pointer' }} />
				</DialogClose>
				<p>opa</p>
			</DialogContent>
		</Dialog>
	);
}

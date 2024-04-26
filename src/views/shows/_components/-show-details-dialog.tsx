import { Button } from '@/components/button';
import { useSeasonStore } from '@/store/seasons-store';
import { Episodes } from '@/views/shows/_components/-episodes';
import { SelectSeason } from '@/views/shows/_components/-select-seasons';
import { ShowInfo } from '@/views/shows/_components/-show-info';
import * as Dialog from '@radix-ui/react-dialog';
import { ArrowLeft, Plus, ThumbsUp, Volume2Icon, X } from 'lucide-react';
import type { ReactNode } from 'react';
import styles from './-show-details-dialog.module.css';
import type { Show } from '@/services/shows/shows-model';

interface ShowDetailsDialogProps {
	children: ReactNode;
	show: Show;
	asChild?: boolean;
}

export function ShowDetailsDialog({
	children,
	show,
	asChild = true,
}: ShowDetailsDialogProps): JSX.Element {
	const changeCurrentSeason = useSeasonStore((state) => state.changeCurrentSeason);

	function handleCloseDialog(): void {
		changeCurrentSeason(null);
	}

	return (
		<Dialog.Root>
			<Dialog.Trigger asChild={asChild} className={styles.trigger}>
				{children}
			</Dialog.Trigger>
			<Dialog.Portal>
				<Dialog.Overlay className="overlay" />
				<Dialog.Content className={`${styles.content}`}>
					<Dialog.Close className="close">
						<X size={24} onClick={handleCloseDialog} />
					</Dialog.Close>

					<Dialog.Close asChild>
						<ArrowLeft style={{ cursor: 'pointer' }} onClick={handleCloseDialog} />
					</Dialog.Close>

					<div className={styles.mainImageContainer}>
						<div className="fadeOutFromTop fadeOutFromBottom">
							<img alt="" src={show?.image.original} />
						</div>

						<div className={styles.about}>
							<h4>{show?.name}</h4>

							{show?.summary && (
								<div dangerouslySetInnerHTML={{ __html: show?.summary }} />
							)}

							<footer className={styles.actions}>
								<Button variant="play-now">Ver agora</Button>
								<div>
									<Button variant="icon-only">
										<Plus />
									</Button>
									<Button variant="icon-only">
										<ThumbsUp />
									</Button>

									<Button variant="icon-only">
										<Volume2Icon />
									</Button>
								</div>
							</footer>
						</div>
					</div>
					<section className={styles.episodesAndInfoSection}>
						<div className={styles.episodesSection}>
							<header>
								<SelectSeason showId={show.id} />
							</header>

							<Episodes />
						</div>

						<ShowInfo show={show} />
					</section>
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	);
}

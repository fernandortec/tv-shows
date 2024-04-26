import { Button } from '@/components/button';
import { useSeasonStore } from '@/store/seasons-store';

import { ArrowLeft, Plus, ThumbsUp, Volume2Icon, X } from 'lucide-react';
import { useState, type ReactNode } from 'react';
import type { Show } from '@/services/shows/shows-model';
import { SelectSeason } from '@/views/shows/(components)/select-seasons/_index';

import { EpisodesList } from '@/views/shows/(components)/episodes-list/_index';
import { ExtraShowInfo } from '@/views/shows/(components)/extra-show-info/_index';
import { Dialog } from '@/components/dialog';
import { DialogClose } from '@/components/dialog/close';
import { DialogContent } from '@/components/dialog/content';
import { DialogTrigger } from '@/components/dialog/trigger';

import styles from './styles.module.css';
import { FadedContainer } from '@/components/faded-container';

interface ShowDetailsDialogProps {
	children: ReactNode;
	show: Show;
}

export function ShowDetailsDialog({
	children,
	show,
}: ShowDetailsDialogProps): JSX.Element {
	const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

	const changeCurrentSeason = useSeasonStore((state) => state.changeCurrentSeason);

	function handleOpenDialog(): void {
		setIsDialogOpen(true);
	}

	function handleCloseDialog(): void {
		changeCurrentSeason(null);
		setIsDialogOpen(false);
	}

	return (
		<Dialog>
			<DialogTrigger onTriggerClick={handleOpenDialog} className={styles.trigger}>
				{children}
			</DialogTrigger>
			<DialogContent className={`${styles.content}`}>
				<DialogClose>
					<X size={24} onClick={handleCloseDialog} />
				</DialogClose>

				<DialogClose style={{ left: '0px' }} asChild>
					<ArrowLeft onClick={handleCloseDialog} />
				</DialogClose>

				<FadedContainer direction="both">
					<div className={styles.mainImageContainer}>
						<img alt="" src={show?.image.original} />

						<div className={styles.about}>
							<h4>{show?.name}</h4>

							{show?.summary && (
								<div
									className={styles.summary}
									dangerouslySetInnerHTML={{ __html: show?.summary }}
								/>
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
								<SelectSeason showId={show.id} isDialogOpen={isDialogOpen} />
							</header>

							<EpisodesList />
						</div>

						<ExtraShowInfo show={show} />
					</section>
				</FadedContainer>
			</DialogContent>
		</Dialog>
	);
}

import { Button } from '@/components/button';
import { FadedContainer } from '@/components/faded-container';
import type { Show } from '@/services/shows/shows-model';
import { ShowDetailsDialog } from '@/views/shows/(components)/show-details-dialog/_index';
import { Plus, ThumbsUp, Volume2Icon } from 'lucide-react';

import styles from './styles.module.css';

interface MainShowBannerProps {
	show?: Show;
}

export function MainShowBanner({ show: mainShow }: MainShowBannerProps): JSX.Element {
	return (
		<div className={styles.imageContainer}>
			<FadedContainer direction="both">
				<img alt="" src={mainShow?.image.original} />

				<div className={styles.aboutShow}>
					<h3>{mainShow?.name}</h3>

					{mainShow?.summary && (
						<div
							className={styles.summary}
							dangerouslySetInnerHTML={{ __html: mainShow.summary }}
						/>
					)}

					<footer className={styles.actions}>
						{mainShow && (
							<ShowDetailsDialog show={mainShow}>
								<Button variant="play-now">Ver agora</Button>
							</ShowDetailsDialog>
						)}

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
			</FadedContainer>
		</div>
	);
}

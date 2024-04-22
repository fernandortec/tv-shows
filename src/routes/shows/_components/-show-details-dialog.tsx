import * as Dialog from "@radix-ui/react-dialog";
import type { ReactNode } from "react";
import styles from "./-show-details-dialog.module.css";
import { Plus, ThumbsUp, Volume2Icon, X } from "lucide-react";
import type { Show } from "@/api/show-schema";
import { Button } from "@/components/button";

interface ShowDetailsDialogProps {
	children: ReactNode;
	show: Show;
}

export function ShowDetailsDialog({
	children,
	show,
}: ShowDetailsDialogProps): JSX.Element {
	return (
		<Dialog.Root>
			<Dialog.Trigger asChild className={styles.trigger}>
				{children}
			</Dialog.Trigger>
			<Dialog.Portal>
				<Dialog.Overlay className="overlay" />
				<Dialog.Content className={`${styles.content} fadeOutFromTop fadeOutFromBottom`}>
					<Dialog.Close className="close">
						<X size={24} />
					</Dialog.Close>
					<div className={styles.mainImageContainer}>
						<img alt="" src={show?.image.original} />

						<div className={styles.about}>
							<h3>{show?.name}</h3>

							{show?.summary && (
								// biome-ignore lint/security/noDangerouslySetInnerHtml:
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

						<section className={styles.episodesSection}>
							<p>Seasons and episodes</p>
						</section>
					</div>
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	);
}

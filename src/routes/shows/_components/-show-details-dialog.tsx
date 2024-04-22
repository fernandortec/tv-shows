import type { Show } from "@/api/show-schema";
import { Button } from "@/components/button";
import { Episodes } from "@/routes/shows/_components/-episodes";
import { SelectSeasons } from "@/routes/shows/_components/-select-seasons";
import * as Dialog from "@radix-ui/react-dialog";
import { Plus, ThumbsUp, Volume2Icon, X } from "lucide-react";
import type { ReactNode } from "react";
import styles from "./-show-details-dialog.module.css";

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
				<Dialog.Content className={`${styles.content}`}>
					<Dialog.Close className="close">
						<X size={24} />
					</Dialog.Close>

					<div className={styles.mainImageContainer}>
						<div className="fadeOutFromTop fadeOutFromBottom">
							<img alt="" src={show?.image.original} />
						</div>

						<div className={styles.about}>
							<h4>{show?.name}</h4>

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
					</div>
					<section className={styles.episodesSection}>
						<header>
							<h5>Episódios e temporadas</h5>
							<SelectSeasons />
						</header>

						<Episodes />
					</section>
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	);
}

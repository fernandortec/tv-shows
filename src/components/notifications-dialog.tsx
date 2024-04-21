import * as Dialog from "@radix-ui/react-dialog";
import { Bell, Check, X } from "lucide-react";
import styles from "./notifications-dialog.module.css";

export function NotificationsDialog(): JSX.Element {
	return (
		<Dialog.Root>
			<Dialog.Trigger asChild className={styles.trigger}>
				<Bell size="24" />
			</Dialog.Trigger>
			<Dialog.Portal>
				<Dialog.Overlay className={styles.overlay} />
				<Dialog.Content className={styles.content}>
					<Dialog.Title>Notificações</Dialog.Title>
					<Dialog.Description>Veja suas notificações</Dialog.Description>
					<Dialog.Close className={styles.close}>
						<X size={24} />
					</Dialog.Close>

					<div className={styles.notification}>
						<Check />
						<p>Não há nenhuma notificação para você</p>
            <span />
					</div>
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	);
}

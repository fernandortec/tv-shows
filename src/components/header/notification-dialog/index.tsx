import { Dialog } from "@/components/dialog";
import { DialogTrigger } from "@/components/dialog/trigger";
import { Bell, Check } from "lucide-react";
import styles from "./styles.module.css";
import { DialogContent } from "@/components/dialog/content";
import { DialogClose } from "@/components/dialog/close";

export function NotificationsDialog(): JSX.Element {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Bell size={24} />
			</DialogTrigger>
			<DialogContent>
				<DialogClose />
				<h1>Notificações</h1>
				<p>Veja suas notificações</p>

				<div className={styles.notification}>
					<Check />
					<p>Não há nenhuma notificação para você</p>
					<span />
				</div>
			</DialogContent>
		</Dialog>
	);
}

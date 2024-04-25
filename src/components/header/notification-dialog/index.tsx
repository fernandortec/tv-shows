import { Dialog } from "@/components/dialog";
import { Bell, Check } from "lucide-react";
import styles from "./styles.module.css";

export function NotificationsDialog(): JSX.Element {
	return (
		<Dialog trigger={<Bell size={24} />}>
			<h1>Notificações</h1>
			<p>Veja suas notificações</p>

			<div className={styles.notification}>
				<Check />
				<p>Não há nenhuma notificação para você</p>
				<span />
			</div>
		</Dialog>
	);
}

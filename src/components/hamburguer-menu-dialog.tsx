import * as Dialog from "@radix-ui/react-dialog";
import styles from "./hamburguer-menu-dialog.module.css";
import { X } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function HamburguerMenuDialog(): JSX.Element {
	return (
		<Dialog.Root>
			<Dialog.Trigger className={styles.trigger}>
				<img src="/assets/hamburguer-menu.svg" alt="Hamburguer Menu Icon" />
			</Dialog.Trigger>
			<Dialog.Portal>
				<Dialog.Overlay className={styles.overlay} />
				<Dialog.Content className={styles.content}>
					<Dialog.Close className={styles.close}>
						<X size={24} />
					</Dialog.Close>
					<ul className={styles.list}>
						<Dialog.Close asChild>
							<Link
								to="/"
								className={styles.navLink}
								data-current={location.pathname === "/"}
							>
								<li>Home</li>
							</Link>
						</Dialog.Close>
						<Dialog.Close asChild>
							<Link
								to="/shows"
								className={styles.navLink}
								data-current={location.pathname === "/shows"}
							>
								<li>Filmes e séries</li>
							</Link>
						</Dialog.Close>

						<Dialog.Close asChild>
							<Link
								to="/support"
								className={styles.navLink}
								data-current={location.pathname === "/support"}
							>
								<li>Suporte</li>
							</Link>
						</Dialog.Close>

						<Dialog.Close asChild>
							<Link
								to="/pricing"
								className={styles.navLink}
								data-current={location.pathname === "/pricing"}
							>
								<li>Planos</li>
							</Link>
						</Dialog.Close>
					</ul>
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	);
}

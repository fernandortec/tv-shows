import { DialogContext } from "@/contexts/dialog-context";
import { useContext, type ReactNode } from "react";

import { renderChildren } from "@/helpers/render-children";
import styles from "./styles.module.css";

interface DialogTriggerProps {
	children: ReactNode;
	asChild?: boolean;
}

export function DialogTrigger({
	children,
	asChild = false,
}: DialogTriggerProps): JSX.Element {
	const [_, setShowModal] = useContext(DialogContext);

	function handleOpenModal(): void {
		setShowModal(true);
	}

	return (
		<>
			{asChild ? (
				renderChildren({
					children,
					onClick: handleOpenModal,
					className: styles.trigger,
				})
			) : (
				<button
					type="button"
					className={styles.close}
					onClick={handleOpenModal}
				>
					{children}
				</button>
			)}
		</>
	);
}

import { DialogContext } from "@/contexts/dialog-context";
import { useContext, type ReactNode } from "react";

import { renderChildren } from "@/helpers/render-children";
import styles from "./styles.module.css";

interface DialogTriggerProps {
	children: ReactNode;
	asChild?: boolean;
	className?: string;
}

export function DialogTrigger({
	children,
	asChild = false,
	className,
}: DialogTriggerProps): JSX.Element {
	const [_, setShowModal] = useContext(DialogContext);

	function handleOpenModal(): void {
		setShowModal(true);
	}

	return (
		<div className={className}>
			{asChild ? (
				renderChildren({
					children,
					onClick: handleOpenModal,
					className: `${styles.trigger} ${className}`,
				})
			) : (
				<button type="button" onClick={handleOpenModal}>
					{children}
				</button>
			)}
		</div>
	);
}

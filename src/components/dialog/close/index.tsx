import { X } from "lucide-react";
import { DialogContext } from "@/contexts/dialog-context";
import { type ReactNode, useContext } from "react";

import styles from "./styles.module.css";
import { renderChildren } from "@/helpers/render-children";

interface DialogCloseProps {
	children: ReactNode;
	asChild?: boolean;
}

export function DialogClose({
	children,
	asChild,
}: DialogCloseProps): JSX.Element {
	const [_, setShowModal] = useContext(DialogContext);

	function handleCloseModal(): void {
		setShowModal(false);
	}

	return (
		<>
			{asChild ? (
				renderChildren(children, handleCloseModal)
			) : (
				<button
					type="button"
					className={styles.close}
					onClick={handleCloseModal}
				>
					<X size={24} />
				</button>
			)}
		</>
	);
}

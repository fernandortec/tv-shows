import classnames from "classnames";
import { PlayIcon } from "lucide-react";
import type { ButtonHTMLAttributes } from "react";
import styles from "./button.module.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: "play-now" | "icon-only" | "primary";
}

export function Button({
	variant,
	type = "button",
	...props
}: ButtonProps): JSX.Element {
	return (
		<button
			className={styles.button}
			type={type}
			{...props}
		>
			<PlayIcon fill="white" size="28" />
			Começe a ver agora
		</button>
	);
}

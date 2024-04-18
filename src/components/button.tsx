import { PlayIcon } from "lucide-react";
import type { ButtonHTMLAttributes } from "react";
import styles from "./button.module.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: "play-now" | "icon-only" | "primary";
}

export function Button({
	variant,
	type = "button",
	children,
	...props
}: ButtonProps): JSX.Element {
	let classNameBasedOnVariant = styles.playButton;

	switch (variant) {
		case "play-now":
			classNameBasedOnVariant = styles.playButton;
			break;

		case "icon-only":
			classNameBasedOnVariant = styles.iconButton;
			break;

		case "primary":
			classNameBasedOnVariant = styles.playButton;
			break;
	}

	return (
		<button className={classNameBasedOnVariant} type={type} {...props}>
			{variant === "play-now" && <PlayIcon fill="white" size="28" />}
			{children}
		</button>
	);
}

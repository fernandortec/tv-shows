import type { ButtonHTMLAttributes } from "react";
import { PlayIcon } from "lucide-react";
import styles from "./styles.module.css";

type Variants = "play-now" | "icon-only" | "primary";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: Variants;
}

export function Button({
	variant,
	type = "button",
	children,
	...props
}: ButtonProps): JSX.Element {
	const classNameByVariant: { [key in Variants]: string } = {
		"icon-only": styles.iconButton,
		"play-now": styles.playNowButton,
		primary: styles.primaryButton,
	};

	const currentVariant = variant ?? "primary";

	return (
		<button
			className={classNameByVariant[currentVariant]}
			type={type}
			{...props}
		>
			{variant === "play-now" && <PlayIcon fill="white" size="28" />}
			{children}
		</button>
	);
}

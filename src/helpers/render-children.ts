import {
	type ReactNode,
	Children,
	isValidElement,
	type ReactElement,
	cloneElement,
} from "react";

interface RenderChildrenProps {
	children: ReactNode;
	onClick: () => void;
	className?: string;
}

export function renderChildren({
	children,
	className,
	onClick,
}: RenderChildrenProps) {
	return Children.map(children, (child) => {
		if (isValidElement(child)) {
			const childElement: ReactElement = child;
			return cloneElement(childElement, {
				onClick: onClick,
				className: className
			});
		}
		return child;
	});
}

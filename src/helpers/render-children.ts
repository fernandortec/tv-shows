import {
	type ReactNode,
	Children,
	isValidElement,
	type ReactElement,
	cloneElement,
} from "react";

export function renderChildren(children: ReactNode, onClick: () => void) {
	return Children.map(children, (child) => {
		if (isValidElement(child)) {
			const childElement: ReactElement = child;
			return cloneElement(childElement, {
				onClick: onClick,
			});
		}
		return child;
	});
}

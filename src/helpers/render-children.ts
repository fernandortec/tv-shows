import { Children, cloneElement, isValidElement, type ReactNode } from 'react';

interface RenderChildrenProps {
	children: ReactNode;
	onClick: () => void;
	className?: string;
}

export function renderChildren({ children, className, onClick }: RenderChildrenProps) {
	return Children.map(children, (child) => {
		if (isValidElement(child)) {
			return cloneElement(child, {
				...child.props,
				onClick: onClick || child.props.onClick,
				className: mergeClassName(child.props.className, className),
			});
		}
		return child;
	});
}

function mergeClassName(childClassName?: string, parentClassName?: string): string {
	if (!parentClassName) return childClassName || '';
	if (!childClassName) return parentClassName;
	return `${parentClassName} ${childClassName}`;
}

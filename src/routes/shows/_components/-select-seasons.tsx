import type { HTMLProps } from "react";

import "./-select-seasons.module.css";

interface SelectItemProps extends HTMLProps<HTMLDivElement> {
	value: string;
}

export function SelectSeasons(): JSX.Element {
	return (
		<div>
			<p>Selecione uma temporada</p>
		</div>
	);
}

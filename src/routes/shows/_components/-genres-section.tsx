import { genres } from "@/helpers/available-genres";

import { Button } from "@/components/button";
import { PaginationProgress } from "@/components/pagination-progress";
import { ActionCard } from "@/routes/shows/_components/-action-card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";
import styles from "./-genres-section.module.css";

export function GenresSection(): JSX.Element {
	const [scrollPosition, setScrollPosition] = useState<number>(0);
	const [scrollPercentage, setScrollPercentage] = useState<number>(0);

	const containerRef = useRef<HTMLDivElement>(null);

	function handleScroll(scrollAmount: number): void {
		if (scrollAmount <= 0 || !containerRef.current) return;

		const newScrollPosition = scrollPosition + scrollAmount;

		const container = containerRef.current;

		const scrollableWidth = container.scrollWidth - container.clientWidth;
		const scrolledPercentage = Math.floor(
			(newScrollPosition / (scrollableWidth || 1)) * 100,
		);

		const roundedPercentage = Math.round(scrolledPercentage / 5) * 5;
		setScrollPercentage(roundedPercentage);

		container.scrollLeft = newScrollPosition;

		setScrollPosition(newScrollPosition);
	}


	return (
		<div>
			<header className={styles.actionsHeader}>
				<h2>Gêneros disponíveis</h2>
			</header>

			<div className={styles.genresSection} ref={containerRef}>
				{genres.map((genre) => (
					<ActionCard genre={String(genre)} key={String(genre)} />
				))}
			</div>

			<footer className={styles.footer}>
				<Button variant="icon-only" onClick={() => handleScroll(-300)}>
					<ChevronLeft />
				</Button>

				<PaginationProgress
					className={styles.progress}
					currentValue={scrollPercentage}
					totalValue={100}
				/>

				<Button variant="icon-only" onClick={() => handleScroll(300)}>
					<ChevronRight />
				</Button>
			</footer>
		</div>
	);
}

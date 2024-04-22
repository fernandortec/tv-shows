import { genres as availableGenders } from "@/helpers/available-genres";

import { Button } from "@/components/button";
import { PaginationProgress } from "@/components/pagination-progress";
import { paginate } from "@/helpers/paginate";
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
		if (scrollPercentage >= 100) return;

		const newScrollPosition = scrollPosition + scrollAmount;

		const container = containerRef.current;

		const scrollableWidth = container.scrollWidth - container.clientWidth;
		const scrolledPercentage =
			(newScrollPosition / (scrollableWidth || 1)) * 100;

		setScrollPercentage(scrolledPercentage);

		container.scrollLeft = newScrollPosition;
		setScrollPosition(newScrollPosition);
	}

	const genres = paginate({
		items: availableGenders,
		pageNumber: 1,
		pageSize: 50,
	});

	return (
		<div>
			<header className={styles.actionsHeader}>
				<h2>Gêneros disponíveis</h2>
			</header>

			<div className={styles.genresSection} ref={containerRef}>
				{genres.items.map((genre) => (
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

import { genres } from '@/helpers/available-genres';

import { Button } from '@/components/button';

import { ActionCard } from '@/views/shows/_components/-action-card';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef, useState } from 'react';
import styles from './-genres-section.module.css';
import { ProgressBar } from '@/components/progress-bar';

export function GenresSection(): JSX.Element {
	const [scrollPosition, setScrollPosition] = useState<number>(0);
	const [scrollPercentage, setScrollPercentage] = useState<number>(0);

	const containerRef = useRef<HTMLDivElement>(null);

	function handleScroll(scrollAmount: number): void {
		if (!containerRef.current) return;

		const newScrollPosition = scrollPosition + scrollAmount;

		const container = containerRef.current;

		const scrollableWidth = container.scrollWidth - container.clientWidth;
		const scrolledPercentage = Math.ceil(
			(newScrollPosition / (scrollableWidth || 1)) * 100
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
				{genres.map((genre, idx) => (
					<ActionCard genre={String(genre)} key={String(genre)} idx={idx} />
				))}
			</div>

			<footer className={styles.footer}>
				<Button variant="icon-only" onClick={() => handleScroll(-300)}>
					<ChevronLeft />
				</Button>

				<ProgressBar
					className={styles.progress}
					value={scrollPercentage}
				/>
				<Button variant="icon-only" onClick={() => handleScroll(300)}>
					<ChevronRight />
				</Button>
			</footer>
		</div>
	);
}

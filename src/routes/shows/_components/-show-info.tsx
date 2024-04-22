import { Blocks, Calendar, Languages, Star, StarHalf } from "lucide-react";
import styles from "./-show-info.module.css";

export function ShowInfo(): JSX.Element {
	const rating = 3.5;

	const renderStars = (): JSX.Element[] => {
		const stars: JSX.Element[] = [];
		for (let i = 1; i <= Math.ceil(rating); i++) {
			if (i <= rating) {
				stars.push(<Star key={i} />);
			} else if (i - 0.5 <= rating) {
				stars.push(<StarHalf key={i} />);
			}
		}
		return stars;
	};

	return (
		<aside className={styles.container}>
			<header>
				<span className={styles.label}>
					<Calendar size={18} />
					Data de lançamento
				</span>
				<p className={styles.paragraphData}>2022</p>
			</header>

			<div>
				<span className={styles.label}>
					<Languages size={18} />
					Linguagens
				</span>
				<p className={styles.badge}>Inglês</p>
			</div>

			<div>
				<span className={styles.label}>
					<Blocks size={18} />
					Gêneros
				</span>
				<div className={styles.badgeWrapper}>
					<p className={styles.badge}>Teen TV Shows</p>
					<p className={styles.badge}>Drama</p>
					<p className={styles.badge}>Comédia</p>
				</div>
			</div>

			<div>
				<span className={styles.label}>
					<Star size={18} />
					Avaliações
				</span>
				<div>
					<div className={styles.rating}>
						<p>Todas avaliações: </p>
						<div>
							{renderStars()}
							<p>{rating}</p>
						</div>
					</div>
				</div>
			</div>

			<div>
				<span className={styles.label}>Criador</span>
				<div className={styles.personContainer}>
					<img
						src="https://static.tvmaze.com/uploads/images/medium_portrait/29/72809.jpg"
						alt=""
					/>
					<div>
						<p>Vince Gilligan</p>
						<span>United States</span>
					</div>
				</div>
			</div>
		</aside>
	);
}

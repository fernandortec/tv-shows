import { Star, StarHalf } from "lucide-react";

export const renderStars = (rating: number): JSX.Element[] => {
	const stars: JSX.Element[] = [];
	const roundedRating = Math.min(rating / 2, 5);

	for (let i = 1; i <= 5; i++) {
		if (i <= roundedRating) {
			stars.push(<Star key={i} />);
		} else if (i - 0.5 <= roundedRating) {
			stars.push(<StarHalf key={i} />);
		} else {
			stars.push(<StarHalf key={i} />);
		}
	}
	return stars;
};

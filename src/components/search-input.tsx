import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import styles from "./search-input.module.css";

export function SearchInput(): JSX.Element {
	const [isInputOpen, setIsInputOpen] = useState<boolean>(false);

	const toggleInput = () => {
		setIsInputOpen((prevState) => !prevState);
	};

	// biome-ignore lint/suspicious/noExplicitAny: 
	const handleDocumentClick = (e: any) => {
		if (!e.target.closest(`.${styles.search}`)) {
			setIsInputOpen(false);
		}
	};

	useEffect(() => {
		document.addEventListener("click", handleDocumentClick);
		return () => {
			document.removeEventListener("click", handleDocumentClick);
		};
	}, [handleDocumentClick]);

	return (
		<div className={styles.search}>
			<input
				className={`${styles.searchInput} ${isInputOpen && styles.toggle}`}
				type="text"
				placeholder="Nomes de séries"
			/>
			<Search size="24" className={styles.searchIcon} onClick={toggleInput} />
		</div>
	);
}

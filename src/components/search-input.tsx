import { Search } from "lucide-react";
import { useEffect, useState, type FormEvent } from "react";
import styles from "./search-input.module.css";
import { useNavigate } from "@tanstack/react-router";

export function SearchInput(): JSX.Element {
	const navigate = useNavigate();

	const [isInputOpen, setIsInputOpen] = useState<boolean>(false);
	const [inputValue, setInputValue] = useState<string>("");

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

	function handleFilterByName(e: FormEvent): void {
		e.preventDefault();

		navigate({ to: "/shows", search: { name: inputValue } });
	}

	return (
		<div className={styles.search}>
			<form onSubmit={handleFilterByName}>
				<input
					className={`${styles.searchInput} ${isInputOpen && styles.toggle}`}
					type="text"
					placeholder="Nomes de séries"
					value={inputValue}
					onChange={(e) => setInputValue(e.target.value)}
				/>
			</form>
			<Search
				size="24"
				className={styles.searchIcon}
				onClick={(e) => {
					toggleInput();
					if (isInputOpen) handleFilterByName(e);
				}}
			/>
		</div>
	);
}

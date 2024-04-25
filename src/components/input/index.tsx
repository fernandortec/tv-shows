import { Search } from "lucide-react";
import { useEffect, useState, type FormEvent } from "react";
import { useNavigate } from "@tanstack/react-router";

import styles from "./styles.module.css";

export function SearchInput(): JSX.Element {
	const navigate = useNavigate();

	const [isInputOpen, setIsInputOpen] = useState<boolean>(false);
	const [inputValue, setInputValue] = useState<string>("");

	const toggleInput = () => {
		setIsInputOpen((prevState) => !prevState);
	};

	const handleDocumentClick = (e: MouseEvent) => {
		if (!(e.target as HTMLElement).closest(`.${styles.search}`)) {
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
		if (inputValue.length === 0) return;

		navigate({ to: "/shows", search: { name: inputValue } });
	}

	return (
		<>
			<form className={styles.search} onSubmit={handleFilterByName}>
				<input
					className={`${styles.searchInput} ${isInputOpen && styles.toggle}`}
					type="text"
					placeholder="Nomes de séries"
					value={inputValue}
					onChange={(e) => setInputValue(e.target.value)}
				/>
				<Search
					size="24"
					className={styles.searchIcon}
					onClick={(e) => {
						toggleInput();
						if (isInputOpen) handleFilterByName(e);
					}}
				/>
			</form>
		</>
	);
}

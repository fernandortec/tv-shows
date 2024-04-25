import { createContext } from "react";

type DialogContext = [
	showModal: boolean,
	setShowModal: (value: boolean) => void,
];

export const DialogContext = createContext<DialogContext>([false, () => {}]);

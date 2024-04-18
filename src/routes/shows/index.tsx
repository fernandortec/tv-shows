import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/shows/")({
	component: () => <ShowsPage />,
});

function ShowsPage(): JSX.Element {
	return (
		<main>
			<p>opa</p>
		</main>
	);
}

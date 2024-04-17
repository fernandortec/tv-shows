import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_shows/")({
	component: () => <ShowsPage />,
});

function ShowsPage(): JSX.Element {
	return (
		<div>
			<p>opa</p>
			<p>opa</p>
			<p>opa</p>
			<p>opa</p>
			<p>opa</p>
			<p>opa</p>
			<p>opa</p>
			<p>opa</p>
		</div>
	);
}

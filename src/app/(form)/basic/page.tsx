import type { JSX } from "react";
import { BasicForm } from "~/app/(form)/basic/_components/basic-form";

export default function Page(): JSX.Element {
	return (
		<div>
			<h1 className="mb-6 font-bold text-3xl">TanStack Form Basic</h1>

			<BasicForm />
		</div>
	);
}

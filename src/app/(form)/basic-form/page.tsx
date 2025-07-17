import type { JSX } from "react";
import { BasicForm } from "~/app/(form)/basic-form/_components/basic-form";

export default function Page(): JSX.Element {
	return (
		<>
			<h1 className="mb-6 font-bold text-3xl">TanStack Form Basic</h1>

			<BasicForm />
		</>
	);
}

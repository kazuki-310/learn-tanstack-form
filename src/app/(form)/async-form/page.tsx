import type { JSX } from "react";
import { AsyncForm } from "~/app/(form)/async-form/_components/async-form";

export default function Page(): JSX.Element {
	return (
		<div>
			<h1 className="mb-6 font-bold text-3xl">
				TanStack Form Async Validation
			</h1>

			<AsyncForm />
		</div>
	);
}

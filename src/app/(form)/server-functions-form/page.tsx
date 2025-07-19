import type { JSX } from "react";
import { ServerFunctionsForm } from "~/app/(form)/server-functions-form/_components/server-functions-form";

export default function Page(): JSX.Element {
	return (
		<>
			<h1 className="mb-6 font-bold text-3xl">
				TanStack Form Server Functions
			</h1>

			<ServerFunctionsForm />
		</>
	);
}

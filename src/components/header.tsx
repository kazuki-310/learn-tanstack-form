import type { JSX } from "react";

export function Header(): JSX.Element {
	return (
		<header className="border-gray-200 border-b bg-white py-4">
			<div className="mx-auto px-8">
				<h1 className="font-bold text-2xl text-gray-900">TanStack Form</h1>
			</div>
		</header>
	);
}

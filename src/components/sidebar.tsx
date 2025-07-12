import Link from "next/link";
import type { JSX } from "react";

const NAVIGATION_ROUTES = [
	{
		href: "/basic",
		label: "Basic Form",
	},
	{
		href: "/async-form",
		label: "Async Form",
	},
] as const;

export function Sidebar(): JSX.Element {
	return (
		<aside className="h-screen w-64 border-gray-200 border-r bg-gray-50 p-6">
			<h1 className="mb-8 font-bold text-2xl text-gray-900">TanStack Form</h1>
			<nav>
				<ul>
					{NAVIGATION_ROUTES.map((route) => (
						<li key={route.href}>
							<Link
								href={route.href}
								className="block rounded px-3 py-2 text-gray-700 hover:bg-gray-100"
							>
								{route.label}
							</Link>
						</li>
					))}
				</ul>
			</nav>
		</aside>
	);
}

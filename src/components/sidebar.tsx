import Link from "next/link";
import type { JSX } from "react";

export function Sidebar(): JSX.Element {
	return (
		<aside className="h-screen w-64 border-gray-200 border-r bg-gray-50 p-6">
			<h1 className="mb-8 font-bold text-2xl text-gray-900">TanStack Form</h1>
			<nav>
				<ul>
					<li>
						<Link
							href="/basic"
							className="block rounded px-3 py-2 text-gray-700 hover:bg-gray-100"
						>
							Basic Form
						</Link>
					</li>
				</ul>
			</nav>
		</aside>
	);
}

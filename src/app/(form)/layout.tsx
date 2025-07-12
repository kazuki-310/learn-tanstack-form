import type { NextLayoutProps } from "~/app/type";
import { Sidebar } from "~/components/sidebar";

export default function Layout({ children }: NextLayoutProps): React.ReactNode {
	return (
		<div className="flex">
			<Sidebar />
			<main className="mx-auto flex-1 px-20 py-8">{children}</main>
		</div>
	);
}

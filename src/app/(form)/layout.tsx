import type { NextLayoutProps } from "~/app/type";
import { Header } from "~/components/header";

export default function Layout({ children }: NextLayoutProps): React.ReactNode {
	return (
		<>
			<Header />
			<main className="container mx-auto py-12">{children}</main>
		</>
	);
}

import type { JSX } from "react";
import { useFormContext } from "~/context/use-form-context";
import { cn } from "~/util/cn";

export function SubscribeButton({ label }: { label: string }): JSX.Element {
	const form = useFormContext();

	return (
		<form.Subscribe
			selector={(state): [boolean, boolean] => [
				state.canSubmit,
				state.isSubmitting,
			]}
		>
			{([canSubmit, isSubmitting]): JSX.Element => (
				<button
					type="submit"
					className={cn(
						"my-auto w-[200px] cursor-pointer rounded-md p-2 text-white",
						canSubmit
							? "bg-blue-500 hover:bg-blue-600"
							: "cursor-not-allowed bg-gray-400",
					)}
					disabled={isSubmitting || !canSubmit}
				>
					{isSubmitting ? "..." : label}
				</button>
			)}
		</form.Subscribe>
	);
}

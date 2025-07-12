import type { JSX } from "react";
import { useFieldContext } from "~/context/use-form-context";

export function CheckboxField({ label }: { label: string }): JSX.Element {
	const field = useFieldContext<boolean>();
	const { name, state, handleChange, handleBlur } = field;
	const { meta } = state;

	return (
		<div className="flex flex-col gap-1">
			<div className="flex items-center gap-2">
				<input
					id={name}
					name={name}
					type="checkbox"
					checked={state.value}
					onChange={(e): void => handleChange(e.target.checked)}
					onBlur={handleBlur}
					className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
				/>
				<label htmlFor={name} className="text-gray-900 text-sm">
					{label}
				</label>
			</div>

			{meta.isTouched && !meta.isValid ? (
				<span className="text-red-500 text-xs">
					{meta.errors.map((err) => err.message).join(",")}
				</span>
			) : null}
		</div>
	);
}

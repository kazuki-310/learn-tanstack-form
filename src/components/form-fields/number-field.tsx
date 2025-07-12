import type { JSX } from "react";
import { useFieldContext } from "~/context/use-form-context";

export function NumberField({ label }: { label: string }): JSX.Element {
	const field = useFieldContext<number>();
	const { name, state, handleChange, handleBlur } = field;
	const { meta } = state;

	return (
		<div className="flex flex-col gap-1">
			<label htmlFor={name}>{label}</label>
			<input
				id={name}
				name={name}
				type="number"
				value={state.value}
				onChange={(e): void => handleChange(Number(e.target.value))}
				onBlur={handleBlur}
				className="w-[300px] rounded-md border-2 border-gray-300 p-2"
			/>

			{meta.isTouched && !meta.isValid ? (
				<span className="text-red-500 text-xs">
					{meta.errors.map((err) => err.message).join(",")}
				</span>
			) : null}
		</div>
	);
}

import type { JSX } from "react";
import { useFieldContext } from "~/context/use-form-context";

type SelectOption = {
	value: string;
	label: string;
};

export function SelectField({
	label,
	selectOptions,
}: {
	label: string;
	selectOptions: SelectOption[];
}): JSX.Element {
	const field = useFieldContext<string>();
	const { name, state, handleChange, handleBlur } = field;
	const { meta } = state;

	return (
		<div className="flex flex-col gap-1">
			<label htmlFor={name}>{label}</label>
			<select
				id={name}
				name={name}
				value={state.value}
				onChange={(e): void => handleChange(e.target.value)}
				onBlur={handleBlur}
				className="w-[300px] rounded-md border-2 border-gray-300 p-2"
			>
				{selectOptions.map((option) => (
					<option key={option.value} value={option.value}>
						{option.label}
					</option>
				))}
			</select>

			{meta.isTouched && !meta.isValid ? (
				<span className="text-red-500 text-xs">
					{meta.errors.map((err) => err.message).join(",")}
				</span>
			) : null}
		</div>
	);
}

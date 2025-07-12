"use client";
import type { JSX } from "react";
import { JOB_OPTIONS } from "~/app/(form)/_lib/constans";
import { checkEmailDuplicate } from "~/app/(form)/async-form/_lib/actions";
import { asyncFormSchema } from "~/app/(form)/async-form/_lib/schema";
import { useAppForm } from "~/hooks/useAppForm";
import { cn } from "~/util/cn";

export function AsyncForm(): JSX.Element {
	const defaultValues = {
		name: "",
		email: "",
		age: 0,
		hobbies: [""],
		address: {
			city: "",
			postalCode: "",
		},
		job: "エンジニア",
		website: "",
		termsAccepted: false,
	};

	const form = useAppForm({
		defaultValues,
		validators: {
			onChange: asyncFormSchema,
		},
		onSubmit: ({ value }): void => {
			alert(JSON.stringify(value, null, 2));
		},
	});

	return (
		<form onSubmit={form.handleSubmit} className="flex flex-col gap-6">
			<div className="flex flex-col gap-2">
				<form.AppField name="name">
					{(field): JSX.Element => <field.TextField label="Name" />}
				</form.AppField>

				<form.AppField
					name="email"
					asyncDebounceMs={500}
					validators={{
						onBlurAsync: ({
							value,
						}): Promise<
							| {
									message: string;
							  }
							| undefined
						> => {
							return checkEmailDuplicate({ value });
						},
					}}
				>
					{(field): JSX.Element => {
						return (
							<>
								<field.TextField label="Email" />
								{field.state.meta.isValidating && (
									<div className="mt-1 text-blue-500 text-sm">
										メールアドレスを確認中...
									</div>
								)}
							</>
						);
					}}
				</form.AppField>

				<form.AppField name="age">
					{(field): JSX.Element => <field.NumberField label="Age" />}
				</form.AppField>

				<form.AppField name="hobbies" mode="array">
					{(field): JSX.Element => (
						<div className="flex flex-col gap-2">
							{field.state.value.map((_, index) => (
								<div key={String(index)} className="flex items-end gap-2">
									<form.AppField name={`hobbies[${index}]`}>
										{(subField): JSX.Element => (
											<subField.TextField label={`Hobby ${index + 1}`} />
										)}
									</form.AppField>

									{field.state.value.length > 1 && (
										<button
											type="button"
											onClick={(): void => field.removeValue(index)}
											disabled={field.state.value.length <= 1}
											className={cn(
												"h-[44px] rounded-md px-3 py-1 text-white",
												field.state.value.length <= 1
													? "cursor-not-allowed bg-gray-400"
													: "bg-red-500 hover:bg-red-600",
											)}
										>
											削除
										</button>
									)}
								</div>
							))}

							<button
								type="button"
								onClick={(): void => field.pushValue("")}
								className="w-[100px] rounded-md bg-blue-500 px-3 py-1 text-white hover:bg-blue-600"
							>
								追加
							</button>
						</div>
					)}
				</form.AppField>

				<form.AppField name="address.city">
					{(field): JSX.Element => <field.TextField label="City" />}
				</form.AppField>

				<form.AppField name="address.postalCode">
					{(field): JSX.Element => <field.TextField label="Postal Code" />}
				</form.AppField>

				<form.AppField name="job">
					{(field): JSX.Element => (
						<field.SelectField
							label="Job"
							selectOptions={JOB_OPTIONS.map((job) => ({
								value: job,
								label: job,
							}))}
						/>
					)}
				</form.AppField>

				<form.AppField name="website">
					{(field): JSX.Element => (
						<field.TextField label="Website (optional)" />
					)}
				</form.AppField>

				<form.AppField name="termsAccepted">
					{(field): JSX.Element => (
						<field.CheckboxField label="I agree to the terms and conditions" />
					)}
				</form.AppField>
			</div>

			<form.AppForm>
				<form.SubscribeButton label="Submit" />
			</form.AppForm>
		</form>
	);
}

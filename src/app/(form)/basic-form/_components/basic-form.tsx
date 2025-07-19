"use client";

import type { JSX } from "react";
import { basicFormSchema } from "~/app/(form)/basic-form/_lib/schema";
import { JOB_OPTIONS, JOB_TYPE, type JobValue } from "~/constants/job";
import { useAppForm } from "~/hooks/useAppForm";

export function BasicForm(): JSX.Element {
	const defaultValues = {
		name: "",
		email: "",
		address: {
			city: "",
			postalCode: "",
		},
		job: JOB_TYPE.ENGINEER as JobValue,
		website: "",
		termsAccepted: false,
	};

	const form = useAppForm({
		defaultValues,
		validators: {
			onChange: basicFormSchema,
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

				<form.AppField name="email">
					{(field): JSX.Element => <field.TextField label="Email" />}
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
								value: job.value,
								label: job.label,
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

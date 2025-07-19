"use client";

import { mergeForm, useTransform } from "@tanstack/react-form";
import { initialFormState } from "@tanstack/react-form/nextjs";
import type { JSX } from "react";
import { useActionState } from "react";
import { submitServerForm } from "~/app/(form)/server-functions-form/_lib/actions";
import { serverFormSchema } from "~/app/(form)/server-functions-form/_lib/schema";
import { serverFormOpts } from "~/app/(form)/server-functions-form/_lib/shared-code";
import { JOB_OPTIONS } from "~/constants/job";
import { useAppForm } from "~/hooks/useAppForm";

export function ServerFunctionsForm(): JSX.Element {
	const [state, action] = useActionState(submitServerForm, initialFormState);

	const form = useAppForm({
		...serverFormOpts,
		transform: useTransform(
			(baseForm) => mergeForm(baseForm, state || initialFormState),
			[state],
		),
		validators: { onChange: serverFormSchema },
	});

	return (
		<div className="space-y-6">
			<form action={action} className="flex flex-col gap-6">
				<div className="flex flex-col gap-2">
					<form.AppField name="name">
						{(field): JSX.Element => <field.TextField label="名前" />}
					</form.AppField>

					<form.AppField name="email">
						{(field): JSX.Element => <field.TextField label="メールアドレス" />}
					</form.AppField>

					<form.AppField name="job">
						{(field): JSX.Element => (
							<field.SelectField
								label="職業"
								selectOptions={JOB_OPTIONS.map((option) => ({
									value: option.value,
									label: option.label,
								}))}
							/>
						)}
					</form.AppField>

					<form.AppField name="message">
						{(field): JSX.Element => <field.TextField label="メッセージ" />}
					</form.AppField>

					<form.AppField name="termsAccepted">
						{(field): JSX.Element => (
							<field.CheckboxField label="利用規約に同意します" />
						)}
					</form.AppField>
				</div>

				<form.AppForm>
					<form.SubscribeButton label="送信" />
				</form.AppForm>
			</form>
		</div>
	);
}

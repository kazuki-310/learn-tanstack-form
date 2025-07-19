import { createFormHook } from "@tanstack/react-form";
import { SubscribeButton } from "~/components/button/subscribe-button";
import { CheckboxField } from "~/components/form-fields/checkbox-field";
import { SelectField } from "~/components/form-fields/select-field";
import { TextField } from "~/components/form-fields/text-field";
import { fieldContext, formContext } from "~/context/use-form-context";

export const { useAppForm } = createFormHook({
	fieldContext,
	formContext,
	fieldComponents: {
		TextField,
		CheckboxField,
		SelectField,
	},
	formComponents: {
		SubscribeButton,
	},
});

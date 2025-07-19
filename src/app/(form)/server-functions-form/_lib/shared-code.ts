import { formOptions } from "@tanstack/react-form/nextjs";
import { JOB_TYPE, type JobValue } from "~/constants/job";

export const serverFormOpts = formOptions({
	defaultValues: {
		name: "",
		email: "",
		job: JOB_TYPE.ENGINEER as JobValue,
		message: "",
		termsAccepted: false,
	},
});

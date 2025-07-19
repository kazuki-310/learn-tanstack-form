import { z } from "zod";
import { JOB_VALUES } from "~/constants/job";

export const basicFormSchema = z.object({
	name: z.string().min(1, "名前は必須です"),
	email: z.email("有効なメールアドレスを入力してください"),
	address: z.object({
		city: z.string().min(1, "市区町村は必須です"),
		postalCode: z.string().min(1, "郵便番号は必須です"),
	}),
	job: z.enum(JOB_VALUES),
	website: z.string(),
	termsAccepted: z
		.boolean()
		.refine((val) => val === true, "利用規約に同意してください"),
});

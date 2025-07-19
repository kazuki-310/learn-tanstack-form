import { z } from "zod";
import { JOB_VALUES } from "~/constants/job";

export const serverFormSchema = z.object({
	name: z.string().min(1, "名前は必須です"),
	email: z.email("有効なメールアドレスを入力してください"),
	job: z.enum(JOB_VALUES),
	message: z.string().min(1, "メッセージは必須です"),
	termsAccepted: z
		.boolean()
		.refine((val) => val === true, "利用規約に同意してください"),
});

export type ServerFormData = z.infer<typeof serverFormSchema>;

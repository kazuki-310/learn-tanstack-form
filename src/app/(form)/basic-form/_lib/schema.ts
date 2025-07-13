import { z } from "zod";

export const JOB_OPTIONS = [
	"エンジニア",
	"デザイナー",
	"マーケター",
	"営業",
	"その他",
] as const;

export const basicFormSchema = z.object({
	name: z.string().min(1, "名前は必須です"),
	email: z.email("有効なメールアドレスを入力してください"),
	age: z
		.number()
		.min(0, "年齢は0以上である必要があります")
		.max(150, "年齢は150以下である必要があります"),
	hobbies: z
		.array(z.string().min(1, "趣味を入力してください"))
		.min(1, "少なくとも1つの趣味を入力してください"),
	address: z.object({
		city: z.string().min(1, "市区町村は必須です"),
		postalCode: z.string().min(1, "郵便番号は必須です"),
	}),
	job: z.enum(JOB_OPTIONS),
	website: z.string(),
	termsAccepted: z
		.boolean()
		.refine((val) => val === true, "利用規約に同意してください"),
});

"use server";

import {
	type ServerFormState,
	ServerValidateError,
	createServerValidate,
} from "@tanstack/react-form/nextjs";
import type { ServerFormData } from "~/app/(form)/server-functions-form/_lib/schema";
import { serverFormOpts } from "~/app/(form)/server-functions-form/_lib/shared-code";

const serverValidate = createServerValidate({
	...serverFormOpts,
	onServerValidate: ({ value }): string | undefined => {
		if (value.name.length < 2) {
			return "サーバーバリデーション: 名前は2文字以上である必要があります";
		}
		if (value.message.length < 10) {
			return "サーバーバリデーション: メッセージは10文字以上である必要があります";
		}
	},
});

export async function submitServerForm(
	_prev: unknown,
	formData: FormData,
): Promise<ServerFormState<ServerFormData, undefined> | undefined> {
	try {
		await serverValidate(formData);

		// NOTE: DB に insert などの処理
	} catch (e) {
		if (e instanceof ServerValidateError) {
			return e.formState;
		}

		throw e;
	}
}

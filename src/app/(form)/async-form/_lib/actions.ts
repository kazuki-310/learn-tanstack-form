"use server";

import { env } from "~/env.mjs";

const URL = env.NEXT_PUBLIC_API_URL;

export async function checkEmailDuplicate({
	value,
}: {
	value: string;
}): Promise<{ message: string } | undefined> {
	const response = await fetch(`${URL}/api/email`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ email: value }),
	});

	const result = await response.json();

	if (!response.ok) {
		return { message: result.error };
	}
}

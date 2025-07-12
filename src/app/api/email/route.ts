import { type NextRequest, NextResponse } from "next/server";

const existingEmails = ["test@gmail.com", "admin@example.com", "user@test.com"];

export async function POST(request: NextRequest): Promise<NextResponse> {
	try {
		const { email } = await request.json();

		await new Promise((resolve) => setTimeout(resolve, 500));

		const isDuplicate = existingEmails.includes(email.toLowerCase());

		if (isDuplicate) {
			return NextResponse.json(
				{ error: "このメールアドレスは既に使用されています" },
				{ status: 409 },
			);
		}

		return NextResponse.json(
			{
				data: {
					message: "このメールアドレスは使用可能です",
				},
			},
			{ status: 200 },
		);
	} catch (_error) {
		return NextResponse.json(
			{ error: "サーバーエラーが発生しました" },
			{ status: 500 },
		);
	}
}

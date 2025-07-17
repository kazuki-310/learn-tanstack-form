import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest): NextResponse {
	// NOTE: ルートパス（/）にアクセスした場合、/basic-form にリダイレクト
	return NextResponse.redirect(new URL("/basic-form", request.url));
}

export const config = {
	matcher: "/",
};

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest): NextResponse {
	// NOTE: ルートパス（/）にアクセスした場合、/basic にリダイレクト
	return NextResponse.redirect(new URL("/basic", request.url));
}

export const config = {
	matcher: "/",
};

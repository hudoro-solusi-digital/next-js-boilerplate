import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
	const token = req.cookies.get("token");
	if (!token) {
		// Do something
	}
	return NextResponse.next();
}

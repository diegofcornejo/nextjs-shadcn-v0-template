import { verify } from "jsonwebtoken";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
	const token = cookies().get("token");

	if (!token) {
		// return NextResponse.redirect("/");
		return NextResponse.json(
			{
				message: "Not authenticated",
			},
			{
				status: 401,
			}
		);
	}

	const { value } = token;

	const secret = "secret";

	try {
		verify(value, secret);

		return NextResponse.json(
			{
				username: "admin",
				image: "https://avatars.githubusercontent.com/u/5421240?v=4",
			},
			{
				status: 200,
			}
		);
	} catch (e) {
		return NextResponse.json(
			{
				message: "Something went wrong",
			},
			{
				status: 400,
			}
		);
	}
}
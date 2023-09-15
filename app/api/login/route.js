import { cookies } from 'next/headers'
import { sign } from "jsonwebtoken";
import { NextResponse } from "next/server";
import USERS from "../data/users";

export async function POST(request) {
	const body = await request.json();
	const { email, password } = await body;

	if (!USERS[email] || USERS[email].password !== password) {
		return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 })
	}

	const secret = "secret";
	const token = sign({ email }, secret, { expiresIn: "1h" });

	const cookie = cookies().set("token", token, {
		httpOnly: true,
		secure: process.env.NODE_ENV !== "development",
		maxAge: 3600,
		sameSite: "strict",
		path: "/",
	});

	const response = {
		message: "Authentication successful!",
	};

	return NextResponse.json(response, {
		status: 200,
		headers: { "Set-Cookie": cookie },
	});
}
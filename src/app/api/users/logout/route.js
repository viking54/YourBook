import { NextResponse } from "next/server";

export function GET() {
  try {
    const response = NextResponse.json(
      { message: "Logout Sucess" },
      { status: "201" }
    );
    response.cookies.set("token", "", {
      httpOnly: true,
      expires: new Date(0), // expire now optional
    });
    return response;
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to Logout" },
      { status: "500" }
    );
  }
}

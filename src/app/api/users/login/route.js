import { connectDb } from "@/helper/db";
import User from "@/models/user";
import { NextResponse } from "next/server";
import { middleware as authMiddleware } from "@/middleware";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
connectDb();
export const middleware = [authMiddleware]; 
export async function POST(request) {
  try {
    const { email, password } = await request.json();
    if (!email || !password) {
      return NextResponse.json(
        { message: "Enter Every Field" },
        { status: 422 }
      );
    }

    const user = await User.findOne({ email: email });
    if (!user) {
      return NextResponse.json(
        { message: "Invalid Email OR Password" },
        { status: 401 }
      );
    }
    const validPassword = await bcryptjs.compare(password, user.password);
    if (!validPassword) {
      return NextResponse.json(
        { message: "Invalid Email OR Password" },
        { status: 401 }
      );
    }
 
    if(!user.isVerified)
    {
      return NextResponse.json(
        { message: "User Not Verified" },
        { status: 401 }
      );
    }

    //creating token  data
    const tokenData = {
      id: user._id,
      name: user.name,
      email: user.email,
    };
    //creating token
    const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET, {
      expiresIn: "1d",
    });

   
    const response = NextResponse.json(
      { message: "Logged in" },
      { status: 201 }
    );
     response.cookies.set("token", token, {
      httpOnly: true,
    });

    return response;
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

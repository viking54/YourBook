import { connectDb } from "@/helper/db";
import { getDataFromToken } from "@/helper/getDataFromToken";
import User from "@/models/user";
import { NextResponse } from "next/server";
import { middleware as authMiddleware } from "@/middleware";
connectDb();
export const middleware = [authMiddleware]; 
export async function GET(request) {
  try {
    const userId = await getDataFromToken(request);
    const user = await User.findOne({ _id: userId }).select("-password");
    return NextResponse.json(
      { message: "User Found", data: user },
      { status: "201" }
    );
  } catch (error) {
    return NextResponse.json({ message:"Failed To Ftech"}, { status: 400 });
  }
}

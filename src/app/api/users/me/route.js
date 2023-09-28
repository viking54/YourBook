import { connectDb } from "@/helper/db";
import { getDataFromToken } from "@/helper/getDataFromToken";
import User from "@/models/user";
import Post from "@/models/post";
import { NextResponse }  from "next/server";

connectDb();

export async function GET(request) {
  try {
    const userId = await getDataFromToken(request);
    const user = await User.findOne({ _id: userId }).select("-password");
    const userPosts = await Post.find({ userId});

    return NextResponse.json(
      { message: "User Found",  data:user ,posts: userPosts},
      { status: "201" }
    );
  } catch (error) {
    return NextResponse.json({ message:"Failed To Fetch"}, { status: 400 });
  }
}

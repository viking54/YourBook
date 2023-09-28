import { connectDb } from "@/helper/db";
import User from "@/models/user";
import Post from "@/models/post";
import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid"; 
import { S3 } from "aws-sdk";

connectDb();

const s3 = new S3({
  region: "ap-south-1",
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  signatureVersion:"v4",
});




export async function POST(req) {
  try {
    const formDataFlag = await req.formData();
      const idea = formDataFlag.get("idea");
      const userId = formDataFlag.get("userId")
      const user = await User.findById({ _id: userId });
      if (!user) {
        return NextResponse.json(
          { message: "User Not Found" },
          { status: 404 }
        );
      }

      const imageKey = `images/${uuidv4()}`;
      const uploadCommand = {
        Bucket: "your-book",
        Key: imageKey,
        Expires:600,
        ContentType: `image/*`, 
     
      }

      const url = await s3.getSignedUrl("putObject",uploadCommand);

      const newPost = new Post({
        idea,
        userId,
        imageUrl: `https://your-book.s3.ap-south-1.amazonaws.com/${imageKey}`,
      });

      await newPost.save();
   
      return NextResponse.json({ message: "Post Created",  url }, { status: 201 });
  
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Error saving post" }, { status: 500 });
  }
}
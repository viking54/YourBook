import { connectDb } from "@/helper/db";
import User from "@/models/user";
import Post from "@/models/post";
import multer from "multer"; 
import { NextResponse } from "next/server";
import { Readable } from "stream";
import mongoose from "mongoose"; // Import mongoose without destructuring

connectDb();

export async function POST(request) {
  const { idea, image, userId } = request.json(); // Use req.body to get request data

 
}

import { connectDb } from "@/helper/db";
import User from "@/models/user";
import { NextResponse} from "next/server";
import bcryptjs from 'bcryptjs'
import crypto from "crypto";
import { sendEmail } from "@/helper/mailer";

connectDb();

export async function POST(request)
{
   try {
    const {name,email,password} = await request.json();
    if(!name || !email || !password )
    {
        return NextResponse.json({message:"Enter Every Field"} , {status:422});
    }

    const user = await User.findOne({email:email})
    if(user)
    {
       return NextResponse.json({message:"User Already Exist"} , {status:409});
    }

    const verificationCode = await crypto.randomBytes(4).toString('hex').toUpperCase(); 
    await sendEmail(email,verificationCode);

    
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password,salt);
    
  

    const newUser = new User({
        name,
        email,
        password:hashedPassword,
        verificationCode:verificationCode,
    });
  
    await newUser.save();

    return NextResponse.json({message:"OTP Sent to Mail"} , {status:201});p
   } catch (error) {
    return NextResponse.json({message:"Internfal server Error"} , {status:400});
   }
}



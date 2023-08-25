import { connectDb } from "@/helper/db";
import User from "@/models/user";
import { NextResponse} from "next/server";

connectDb();


export async function POST(request) {
    
    try {
        const {email,verificationCode} = await request.json();
      
        const user = await User.findOne({email:email})
        if(user.verificationCode!==verificationCode)
        {
            return NextResponse.json({message:"Not Verified"} , {status:400});

        }
    
        user.isVerified=true;
        user.verificationCode=undefined;
        await user.save();
    
        return NextResponse.json({message:"User Created"} , {status:201});
       } catch (error) {
        return NextResponse.json({message:"Internal server Error"} , {status:400});
       }



  
    
}
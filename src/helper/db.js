import mongoose from "mongoose";

export const connectDb = async ()=>
{
  try {
    const DB = process.env.DATABASE;
     await mongoose.connect(DB,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
     });
     console.log("Connected");
  } catch (error) {
    console.log("Not Connected");
  }
}


import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique:true,
  },
  password: {
    type: String,
    required: true,
  },
  isVerified: {
    type: Boolean,
    default:false,
  },
  verificationCode:{
    type:String,
  }
  
});

const User = mongoose.models.User || mongoose.model("User", UserSchema);
export default User;

import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
  idea: {
    type: String,
   
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    },
  imageUrl:{
    type: String,
  
  }
});

const Post = mongoose.models.Post ||  mongoose.model("Post", PostSchema);

export default Post;
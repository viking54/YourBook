import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
  idea: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  }
});

const Post = mongoose.models.Post ||  mongoose.model("Post", PostSchema);

export default Post;
const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({

  comment: {
    type: String,
    required: true,
  },
  madeBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  madeByName: {
    type: String,
    required: true,
  },
  postId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post",
  },
  likes: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Comment", CommentSchema);

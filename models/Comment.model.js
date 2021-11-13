const { Schema, model } = require("mongoose");

const commentSchema = new Schema({
  input: String,
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: "User" //whatever you defined the model as "blabla" in the model in the User.model
  },
  commentingOn: {
    type: Schema.Types.ObjectId,
    ref: "Recipe"
  },
});

const CommentModel = model("Comment", commentSchema);

module.exports = CommentModel;